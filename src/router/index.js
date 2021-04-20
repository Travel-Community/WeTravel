import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShareExperience from "../views/ShareExperience.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shareexperience",
    name: "ShareExperience",
    component: ShareExperience,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
