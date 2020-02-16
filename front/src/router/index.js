import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login";
import HomePage from "@/components/home";
import Setting from "@/components/setting";
import ShowArticles from "@/components/article";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/setting",
      component: Setting
    },
    {
      path: "/article/:id",
      component: ShowArticles
    }
  ]
});
