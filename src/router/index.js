import { createRouter, createWebHistory } from "vue-router";
import ShareExperience from "../views/ShareExperience.vue";
import Suggestion from "../views/Suggestion.vue"
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/suggestion",
    name: "Suggestion",
    component: Suggestion
  },

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
