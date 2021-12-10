import { createRouter, createWebHashHistory } from "vue-router";
import About from "@/views/About.vue";
import Notes from "@/views/Notes.vue";
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
    meta: { title: "前端開發筆記" },
    component: Notes,
  },
  { path: "/:path(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
