import { Factory } from "miragejs";
import type { FactoryDefinition } from "miragejs/-types";

export default Factory.extend({
  id: "1",
  total: 0,
  payments: [],
}) as FactoryDefinition;
