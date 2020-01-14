import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import "./plugins/vant.js";

Vue.config.productionTip = false;

// 给Vue原型上添加一个$bus属性且赋值一个实例
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
