import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "./routers/index.js";
import pinia from "@/stores/index";
import '@/firebase/db';
import '@/firebase/storage';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
