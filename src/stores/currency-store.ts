import { defineStore } from "pinia";
import type { CurrencyCurrent } from "@/types/currency";
import type { CurrencyConversion } from "@/graphql/types/generated";

interface ICurrency {
  baseCurrency: CurrencyConversion | undefined | null;
  chosenOption: string;
}

export const useCurrencyStore = defineStore("currency-store", {
  state: (): ICurrency => ({
    baseCurrency: {},
    chosenOption: "BRL",
  }),

  actions: {
    setBaseCurrencyInfo(item: CurrencyConversion | undefined | null) {
      this.baseCurrency = item;
    },

    setChosenCurrency(item: string) {
      this.chosenOption = item;
    },
  },
  getters: {
    getCurrencyInfo: (state) => state.baseCurrency,
    getChosenOption: (state) => state.chosenOption,
    getCurrencyChosen: (state): CurrencyCurrent => {
      const isCurrencyDefault =
        state.baseCurrency?.baseCurrencyInfo?.code === state.chosenOption;

      if (isCurrencyDefault) {
        return {
          symbol: state.baseCurrency?.baseCurrencyInfo?.symbol || "R$",
          rate: 1,
        };
      }

      return state.baseCurrency?.conversions?.reduce((acc, item) => {
        if (item?.currencyInfo?.code === state.chosenOption) {
          return {
            ...acc,
            symbol: item?.currencyInfo.symbol,
            rate: item?.rate,
          };
        }
        return acc;
      }, {}) as CurrencyCurrent;
    },
  },

  persist: {
    enabled: true,
  },
});
