import { Server } from "miragejs";

import seeds from "./seeds";
import factories from "./factories";
import models from "./modules";
import routes from "./routes";

function makeServer({ environment = "development", timing = 0 } = {}) {
  const server = new Server({
    environment,
    models,
    seeds,
    factories,
    routes,
  });

  server.timing = timing;
}

export { makeServer };
