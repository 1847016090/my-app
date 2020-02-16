// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import {
  Button,
  Field,
  Image,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Search,
  Tab,
  Tabs,
  List,
  Panel
} from "vant";
import axios from "axios";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.prototype.axios = axios;
import App from "./App";
import router from "./router";

Vue.use(Button);
Vue.use(Field);
Vue.use(Image);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(Panel);
Vue.use(mavonEditor);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
