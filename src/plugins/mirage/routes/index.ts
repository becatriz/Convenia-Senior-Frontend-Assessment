import { OrderRoute } from "./order.route";
import { PaymentsRoute } from "./payments.route";
import { CurrencyRoute } from "../graphql/routes/currency.route";
import type { Server } from "miragejs";

export function routes(this: Server) {
  this.urlPrefix = import.meta.env.VITE_APP_URL_API as string;
  const isPassthrough = import.meta.env.VITE_APP_MOCK_SERVER === "enable";
  const urlGraphql = import.meta.env.VITE_APP_URL_API_GRAPHQL as string;

  CurrencyRoute.call(this);
  OrderRoute.call(this);
  PaymentsRoute.call(this);

  !isPassthrough && this.passthrough(urlGraphql);
}

export default routes;
