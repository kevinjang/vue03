import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
// 开启路由插件
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
