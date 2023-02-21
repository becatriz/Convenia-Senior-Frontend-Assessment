import type { Server } from "miragejs";

export default function (server: Server) {
  server.create("currencyConversion", {
    id: "1",
    data: {
      currencyConversion: {
        baseCurrencyInfo: {
          code: "BRL",
          symbol: "R$",
          __typename: "CurrencyInfo",
        },
        conversions: [
          {
            currencyInfo: {
              code: "USD",
              symbol: "$",
              __typename: "CurrencyInfo",
            },
            rate: 5.1596,
            timestamp: 1676327400,
            __typename: "ConversionInfo",
          },
          {
            currencyInfo: {
              code: "EUR",
              symbol: "€",
              __typename: "CurrencyInfo",
            },
            rate: 5.5388,
            timestamp: 1676348933,
            __typename: "ConversionInfo",
          },
        ],
        __typename: "CurrencyConversion",
      },
    },
  });
}
