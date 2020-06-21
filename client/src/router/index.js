import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Maintenance from "@/views/Maintenance.vue";
import Reports from "@/views/Reports.vue";
import Test from "@/views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
