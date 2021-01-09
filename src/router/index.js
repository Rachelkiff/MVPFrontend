import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/landingpage",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/profilepage",
    name: "ProfilePage",
    component: ProfilePage
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
