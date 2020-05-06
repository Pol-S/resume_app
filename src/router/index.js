import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentsIndex from "../views/StudentsIndex.vue";
import PublicShow from "../views/PublicShow.vue";

import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Update from "../views/Update.vue";
import Show from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "students-index",
    component: StudentsIndex,
  },
  {
    path: "/public_show/:id",
    name: "public_show",
    component: PublicShow,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/update", name: "update", component: Update },
  { path: "/show", name: "show", component: Show },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
