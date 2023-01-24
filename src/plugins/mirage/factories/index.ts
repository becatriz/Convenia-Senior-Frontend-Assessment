import type { Factory } from "miragejs";
import OrderFactory from "./order.factory";
import PaymentFactory from "./payment.factory";

export default {
  order: OrderFactory as typeof Factory,
  payment: PaymentFactory as typeof Factory,
};
