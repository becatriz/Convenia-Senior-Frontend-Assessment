import { OrderRoute } from "./order.route";
import { PaymentsRoute } from "./payments.route";
import type { Server } from "miragejs";

export function routes(this: Server) {
  this.urlPrefix = import.meta.env.VITE_APP_URL_API as string;

  OrderRoute.call(this);
  PaymentsRoute.call(this);

  this.passthrough(`http://localhost:3000/graphql`);
}

export default routes;
