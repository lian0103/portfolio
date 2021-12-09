import About from "./views/About.vue";
import Notes from "./views/Notes.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/about",
    meta: { title: "關於我" },
    component: About,
  },
  {
    path: "/notes",
    meta: { title: "前端開發筆記" },
    component: Notes,
  },
  {
    path: "*",
    name: "404",
    redirect: "/about",
  },
];
