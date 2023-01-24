import { defineStore } from "pinia";
import type { Items, Command } from "@/types/command";
import Api from "@/services/http";
import type { TotalOrder } from "@/types/totalOrder";
import { usePaymentsStore } from "./payment-store";
import { useCurrencyStore } from "./currency-store";
import { getFormattedValue } from "@/utils/formattedValue";
import { usePersonStore } from "./person-store";

interface IOrders {
  orders: Array<Items>;
  code: string;
  command: Array<Command>;
  orderTotalConfirmed: Array<TotalOrder>;
  orderTotalPartial: Array<TotalOrder>;
}
export const useOrderStore = defineStore("order-store", {
  state: (): IOrders => ({
    orders: [],
    code: "",
    command: [],
    orderTotalConfirmed: [],
    orderTotalPartial: [],
  }),
  actions: {
    async updateOrder(payload: Array<Items>): Promise<void> {
      const { setOrder, code } = useOrderStore();

      const { data } = await Api.put(`/order/${code}`, payload);

      setOrder(data);
    },

    async fetchOrders(): Promise<void> {
      const { setOrder } = useOrderStore();

      const { data } = await Api.get("/order");

      setOrder(data);
    },

    setOrder(orders: Array<Items>): void {
      this.orders = orders;
    },

    setCodeTable(code: string): void {
      const { setCommandByOrder } = useOrderStore();

      this.code = code;

      setCommandByOrder(code);
    },

    setCommandByOrder(code: string): void {
      this.orders.forEach((order) => {
        if (order.code === code) {
          this.command = order.command;
        }
      });
    },

    setCommand(command: Array<Command>): void {
      this.command = command;
    },

    setConfirmedOrder(orderConfirmed: TotalOrder): void {
      this.orderTotalConfirmed.forEach((value) => {
        if (value.code === this.code) {
          value.total = orderConfirmed.total;
        }
      });

      this.orderTotalConfirmed = [...this.orderTotalConfirmed, orderConfirmed];
    },

    setTotalPartial(orderConfirmed: TotalOrder): void {
      const clonedOrder = structuredClone(orderConfirmed);
      const { getPayments } = usePaymentsStore();

      getPayments.forEach((value) => {
        if (clonedOrder.code === value.id) {
          const payments = value.payments.reduce((acc, item) => {
            return acc + item.value;
          }, 0);

          clonedOrder.total += payments;
        }
      });

      this.orderTotalPartial = [clonedOrder, ...this.orderTotalPartial];
    },
  },
  getters: {
    getOrders: (state) => state.orders,
    getCommand: (state) => state.command,
    getOrderTotalConfirmed: (state) => state.orderTotalConfirmed,
    getOrderTotalPartial: (state) =>
      state.orderTotalPartial.find((value) => value.code == state.code),
    totalDrinks: (state): number => {
      const { getCurrencyChosen } = useCurrencyStore();

      const drinks = state.command.map((item) => item.drinks).flat();
      if (!drinks.length) return 0;

      const currencyDrinks = drinks.map((item) => {
        return {
          ...item,
          value: getFormattedValue(item.value, getCurrencyChosen?.rate),
        };
      });

      console.log(currencyDrinks);

      return currencyDrinks.reduce((acc, item) => {
        const value = item.value * item.amount;
        return acc + value;
      }, 0);
    },
    totalFoods: (state): number => {
      const { getCurrencyChosen } = useCurrencyStore();

      const foods = state.command.map((item) => item.foods).flat();

      if (!foods.length) return 0;

      const currencyFoods = foods.map((item) => {
        return {
          ...item,
          value: getFormattedValue(item.value, getCurrencyChosen?.rate),
        };
      });

      return currencyFoods.reduce((acc, item) => {
        const value = item.value * item.amount;
        return acc + value;
      }, 0);
    },

    totalServings: (state): number => {
      const { getCurrencyChosen } = useCurrencyStore();

      const servings = state.command.map((item) => item.servings).flat();

      if (!servings.length) return 0;

      const currencyServings = servings.map((item) => {
        return {
          ...item,
          value: getFormattedValue(item.value, getCurrencyChosen?.rate),
        };
      });

      return currencyServings.reduce((acc, item) => {
        const value = item.value * item.amount;
        return acc + value;
      }, 0);
    },

    totalSalads: (state): number => {
      const { getCurrencyChosen } = useCurrencyStore();

      const salads = state.command.map((item) => item.salads).flat();

      if (!salads.length) return 0;

      const currencySalads = salads.map((item) => {
        return {
          ...item,
          value: getFormattedValue(item.value, getCurrencyChosen?.rate),
        };
      });

      return currencySalads.reduce((acc, item) => {
        const value = item.value * item.amount;
        return acc + value;
      }, 0);
    },

    getTotalAccount: (state): TotalOrder => {
      const { totalDrinks, totalFoods, totalServings, totalSalads } =
        useOrderStore();
      const { getPayments } = usePaymentsStore();

      const tableAccount = getPayments.map((value) => {
        if (value.id === state.code) {
          const payments = value.payments.reduce((acc, item) => {
            return acc + item.value;
          }, 0);

          return {
            id: state.code,
            total: payments,
          };
        }
      });

      const total = totalDrinks + totalFoods + totalServings + totalSalads;

      return tableAccount.reduce((acc, item) => {
        if (item?.id === state.code) {
          const totalAccountWithPayments = total - item.total;

          return {
            ...acc,
            code: item.id,
            total: Math.abs(totalAccountWithPayments),
          };
        }

        return acc;
      }, {}) as TotalOrder;
    },
  },

  persist: {
    enabled: true,
  },
});
