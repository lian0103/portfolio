import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import About from "@/views/About.vue";
import Message from "@/views/Message.vue";
import NotFound from "@/views/NotFound.vue";

export const routes = [
  {
    path: `/`,
    redirect: `/about`,
  },
  {
    path: `/about`,
    meta: { title: "關於我" },
    component: About,
  },
  {
    path: `/notes`,
    meta: { title: "留言區" },
    component: Message,
  },
  { path: "/:path(.*)*", redirect: "/about" },
];

const isProduction = process.env.NODE_ENV === "production";
const router = createRouter({
  history: isProduction ? createWebHashHistory() : createWebHistory(),
  routes,
});

export default router;
