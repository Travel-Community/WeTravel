import { createRouter, createWebHistory } from "vue-router";
import ShareExperience from "../views/ShareExperience.vue";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/shareexperience",
    name: "ShareExperience",
    component: ShareExperience,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
