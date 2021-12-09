import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import routes from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  document
    .getElementsByName("head")
    .append('<link rel="icon" href="vue3Blog/assets/favicon.ico">');
}
