/* eslint-disable @typescript-eslint/ban-types */
import { Response, Model, Server } from "miragejs";
import type { ModelDefinition, Registry } from "miragejs/-types";
import type Schema from "miragejs/orm/schema";
import type { Items } from "@/types/command";
import { CommandReset } from "../utils/command";

const OrderModel: ModelDefinition<Items> = Model.extend({});

type AppRegistry = Registry<
  {
    order: typeof OrderModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export function OrderRoute(this: Server) {
  this.get("order", (schema: AppSchema) => {
    const orders = schema.all("order").models;

    return new Response(200, {}, orders);
  });

  this.put(
    "order/:id",
    (schema: AppSchema, request: { requestBody: string; params: any }) => {
      const id = request.params["id"];
      const data = JSON.parse(request.requestBody);

      data.forEach((value: Items) => {
        if (value.status === "closed") {
          value.command = CommandReset;
        }
      });

      schema.find("order", id)?.update(data[0]);

      const orders = schema.all("order").models;

      return new Response(200, {}, orders);
    },
  );
}

export default { OrderRoute };
