import type { Server } from "miragejs";
import createOrderSeed from "./order.seed";
import createPaymentSeed from "./payment.seed";
import createCurrencySeed from "../graphql/seeds/currency.seed";

function seeds(server: Server) {
  createOrderSeed(server);
  createPaymentSeed(server);
  createCurrencySeed(server);
}

export default seeds;
