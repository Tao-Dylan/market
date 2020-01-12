import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'

Vue.config.productionTip = false

// 给Vue原型上添加一个$bus属性且赋值一个实例
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
