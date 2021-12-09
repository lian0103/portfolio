import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import routes from "./routes.js";
import pinia from "@/stores/index";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

app.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
