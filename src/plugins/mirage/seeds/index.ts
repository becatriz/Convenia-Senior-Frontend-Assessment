import type { Server } from "miragejs";
import createOrderSeed from "./order.seed";
import createPaymentSeed from "./payment.seed";

function seeds(server: Server) {
  createOrderSeed(server);
  createPaymentSeed(server);
}

export default seeds;
