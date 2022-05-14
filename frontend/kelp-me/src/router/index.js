import { createRouter, createWebHistory } from "vue-router";
import ImpactoView from "../views/ImpactoView.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/organizaciones",
    name: "Organizaciones",
    component: () => import("../views/OrganizacionesView.vue"),
  },
  {
    path: "/impacto",
    name: "Impacto",
    component: ImpactoView,
  },
  {
    path: "/usos",
    name: "Usos",
    component: () => import("../views/UsosView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;