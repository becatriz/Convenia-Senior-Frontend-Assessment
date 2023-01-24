import { defineStore } from "pinia";
import type { Payments } from "@/types/payments";
import Api from "@/services/http";
import { useOrderStore } from "./order-store";

interface IPayments {
  payments: Array<Payments>;
  isClosedAccount: boolean;
}

export const usePaymentsStore = defineStore("payments-store", {
  state: (): IPayments => ({
    payments: [],
    isClosedAccount: false,
  }),
  actions: {
    async fetchPayments(): Promise<void> {
      const { data } = await Api.get(`/payments`);

      this.setPayments(data);
    },

    async createPayments(payload: Payments): Promise<void> {
      const { data } = await Api.post(`/payments/${payload.id}`, payload);

      this.setPayments(data);
    },

    setPayments(payments: Array<Payments>) {
      this.payments = payments;
    },

    setIsClosedAccount(status: boolean) {
      this.isClosedAccount = status;
    },
  },
  getters: {
    getPayments: (state) => state.payments,
    getIsClosedStatus: (state) => state.isClosedAccount,
    getPaymentsById: (state) => {
      const { code } = useOrderStore();

      const item = state.payments.find((value) => value.id == code);

      return item?.id ? item.payments : [];
    },
  },

  persist: {
    enabled: true,
  },
});
