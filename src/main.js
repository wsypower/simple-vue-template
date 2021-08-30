import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 核心插件
import corePlugins from "@/plugin/ty";
Vue.use(corePlugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
