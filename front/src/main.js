// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { Button, Field, Image, Cell, CellGroup } from "vant";
import axios from "axios";

Vue.prototype.axios = axios;
import App from "./App";
import router from "./router";

Vue.use(Button);
Vue.use(Field);
Vue.use(Image);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
