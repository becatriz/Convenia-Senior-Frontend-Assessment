/* eslint-disable prettier/prettier */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**
 *
 *     Currency conversion info with rate, timestamp
 *     and the info of the used currency
 *
 */
export type ConversionInfo = {
  __typename?: "ConversionInfo";
  currencyInfo?: Maybe<CurrencyInfo>;
  rate?: Maybe<Scalars["Float"]>;
  timestamp?: Maybe<Scalars["Int"]>;
};

/**
 *
 *     Currency with a list of different currencies conversions
 *
 */
export type CurrencyConversion = {
  __typename?: "CurrencyConversion";
  baseCurrencyInfo?: Maybe<CurrencyInfo>;
  conversions?: Maybe<Array<Maybe<ConversionInfo>>>;
};

/**
 *
 *     Currency info with its standard code and its symbol
 *
 */
export type CurrencyInfo = {
  __typename?: "CurrencyInfo";
  code?: Maybe<Scalars["String"]>;
  symbol?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  currencyConversion?: Maybe<CurrencyConversion>;
};

export type QueryCurrencyConversionArgs = {
  baseCurrency: Scalars["String"];
  convertCurrencies: Array<InputMaybe<Scalars["String"]>>;
};

export type GetCurrencyConversionQueryVariables = Exact<{
  baseCurrency: Scalars["String"];
  convertCurrencies:
    | Array<InputMaybe<Scalars["String"]>>
    | InputMaybe<Scalars["String"]>;
}>;

export type GetCurrencyConversionQuery = {
  __typename?: "Query";
  currencyConversion?: {
    __typename?: "CurrencyConversion";
    baseCurrencyInfo?: {
      __typename?: "CurrencyInfo";
      code?: string | null;
      symbol?: string | null;
    } | null;
    conversions?: Array<{
      __typename?: "ConversionInfo";
      rate?: number | null;
      timestamp?: number | null;
      currencyInfo?: {
        __typename?: "CurrencyInfo";
        code?: string | null;
        symbol?: string | null;
      } | null;
    } | null> | null;
  } | null;
};
