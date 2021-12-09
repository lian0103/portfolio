import About from "./views/About.vue";
import Notes from "./views/Notes.vue";

/** @type {import('vue-router').RouterOptions['routes']} */

const isProduction = process.env.NODE_ENV === "production";
const rootPath = isProduction ? "/vue3Blog/" : "/";

const routes = [
  {
    path: `${rootPath}about`,
    meta: { title: "關於我" },
    component: About,
  },
  // {
  //   path: `${rootPath}notes`,
  //   meta: { title: "前端開發筆記" },
  //   component: Notes,
  // },
  { path: "/:path(.*)", redirect: `${rootPath}about` },
];

export default routes;
