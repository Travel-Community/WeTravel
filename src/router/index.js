import { createRouter, createWebHistory } from "vue-router";
import ShareExperience from "../views/ShareExperience.vue";
import Suggestion from "../views/Suggestion.vue";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import Event from "../views/Event.vue";
import profile from "../views/profile.vue";
const routes = [
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/suggestion",
    name: "Suggestion",
    component: Suggestion,
  },

  {
    path: "/share-experience",
    name: "ShareExperience",
    component: ShareExperience,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/profile",
    name: "Profile",
    component: profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
