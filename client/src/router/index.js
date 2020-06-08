import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Controls from "@/views/ManualControl";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/controls",
    name: "Controls",
    component: Controls
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
