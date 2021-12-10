import { createRouter, createWebHashHistory } from "vue-router";
import About from "@/views/About.vue";
import Notes from "@/views/Notes.vue";

export const routes = [
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
  { path: "/:path(.*)", redirect: `/about` },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
