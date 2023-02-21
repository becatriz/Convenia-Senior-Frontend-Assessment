import { defineStore } from "pinia";
import type { Items, Command } from "@/types/command";
import Api from "@/services/http";
import type { TotalOrder } from "@/types/totalOrder";
import { usePaymentsStore } from "./payment-store";
import { useCurrencyStore } from "./currency-store";
import { getFormattedValue } from "@/utils/formattedValue";

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
      const { data } = await Api.put(`/order/${this.code}`, payload);

      this.orders = data;
    },

    async fetchOrders(): Promise<void> {
      const { data } = await Api.get("/order");

      this.setOrder(data);
    },

    setOrder(orders: Array<Items>): void {
      this.orders = orders;

      orders.forEach((item) => {
        this.setCodeTable(item.code);
        this.setTotalPartial(this.getTotalAccount);
        this.setConfirmedOrder(this.getTotalAccount);
      });
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
    getTotalEachItem: (state) => {
      return (typeItem: string) => {
        const { getCurrencyChosen } = useCurrencyStore();

        const items = state.command
          ?.map((item) => item[typeItem as unknown as keyof Command])
          .flat();

        if (!items?.length) return 0;

        const currencyItems = items.map((item: any) => {
          return {
            ...item,
            value: getFormattedValue(item.value, getCurrencyChosen?.rate),
          };
        });

        return currencyItems.reduce((acc, item) => {
          const value = item.value * item.amount;
          return acc + value;
        }, 0);
      };
    },

    getTotalAccount: (state): TotalOrder => {
      const { getTotalEachItem } = useOrderStore();
      const items: string[] = ["drinks", "foods", "servings", "salads"];

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

      const total = items.reduce((acc, item) => {
        return acc + getTotalEachItem(item);
      }, 0);

      return tableAccount.reduce((acc, item) => {
        if (item?.id === state.code) {
          const totalAccountWithPayments = total - item?.total;

          return {
            ...acc,
            code: item?.id,
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
