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
  mounted() {
    // 展示系统信息
    this.$store.commit("ty/releases/versionShow");
  },
  render: (h) => h(App),
}).$mount("#app");
