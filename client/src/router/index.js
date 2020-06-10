import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Controls from "@/views/ManualControl.vue";
import Logs from "@/views/Logs.vue";

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
  },
  {
    path: "/logs",
    name: "Logs",
    component: Logs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
