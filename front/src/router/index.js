import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login";
import HomePage from "@/components/home";
import Setting from "@/components/setting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: Login
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/setting",
      name: "Setting",
      component: Setting
    }
  ]
});
