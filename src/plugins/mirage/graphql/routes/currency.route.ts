/* eslint-disable @typescript-eslint/ban-types */
// https://dev.to/chuckcarpenter/simplify-using-miragejs-with-graphql-g54
export function CurrencyRoute(this: any) {
  const urlGraphql = import.meta.env.VITE_APP_URL_API_GRAPHQL as string;

  this.post(urlGraphql, (schema: any) => {
    return schema.all("currencyConversion").models[0].attrs;
  });
}

export default { CurrencyRoute };
