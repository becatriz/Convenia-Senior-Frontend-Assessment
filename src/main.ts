import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import type { PluginOptions } from "vue-toastification";
import piniaPersist from "pinia-plugin-persist";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";
import { makeServer } from "@/plugins/mirage";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import "./assets/main.scss";

if (import.meta.env.MODE === "development") {
  makeServer();
}

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:3000/graphql",
});

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
}).use(pinia);

const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
};

app.use(router);
app.use(Toast, options);
app.mount("#app");
