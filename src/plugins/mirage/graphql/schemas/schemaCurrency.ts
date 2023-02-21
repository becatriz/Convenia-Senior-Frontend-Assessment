export const graphQLSchema = `
  type ConversionInfo {
    rate: Float
    timestamp: Int
    currencyInfo: CurrencyInfo
  }
    
  type CurrencyInfo {
    code: String
    symbol: String
  }
  

  type CurrencyConversion {
    baseCurrencyInfo: CurrencyInfo
    conversions: [ConversionInfo]
  }
  
  type Query {
    currencyConversion(baseCurrency: String!, convertCurrencies: [String]!): CurrencyConversion
  }
  
`;
