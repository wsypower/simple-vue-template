import Vue from "vue";
import Vuex from "vuex";
import wadmin from "@/store/modules/ty/index.js";

Vue.use(Vuex);

// TODO 此处模块导出有待思考
// 导出store模块
export default new Vuex.Store({
  modules: {
    "w-admin": wadmin,
  },
});
