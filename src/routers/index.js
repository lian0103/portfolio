import { createRouter, createWebHashHistory } from "vue-router";
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
  { path: "/:path(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
