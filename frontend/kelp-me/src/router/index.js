import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/organizaciones",
    name: "Organizaciones",
    component: () => import("../views/Organizaciones.vue"),
  },
  {
    path: "/impacto",
    name: "Impacto",
    component: () => import("../views/Impacto.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
