/* eslint-disable @typescript-eslint/ban-types */
import { Response, Model, Server } from "miragejs";
import type { ModelDefinition, Registry } from "miragejs/-types";
import type Schema from "miragejs/orm/schema";
import type { Payments } from "@/types/payments";
import type { Items } from "@/types/command";

const PaymentModel: ModelDefinition<Payments> = Model.extend({});
const OrderModel: ModelDefinition<Items> = Model.extend({});

type AppRegistry = Registry<
  {
    payment: typeof PaymentModel;
    order: typeof OrderModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export function PaymentsRoute(this: Server) {
  this.get("payments", (schema: AppSchema) => {
    const payments = schema.all("payment").models;

    return new Response(200, {}, payments);
  });

  this.post("payments/:id", (schema: any, request: any) => {
    const id = request.params["id"];

    const data = JSON.parse(request.requestBody);

    const payload = schema.payments.findBy({ id: id }).attrs;

    const order = schema.find("order", id)?.attrs;
    if (order.status === "closed") {
      payload.payments = data.payments;
    } else {
      payload.payments.push(data.payments[0]);
    }

    schema.create("payment", payload);

    const payments = schema.all("payment").models;

    return new Response(201, {}, payments);
  });
}

export default { PaymentsRoute };
