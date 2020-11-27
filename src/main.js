import Vue from 'vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import App from './App.vue'
import http from '@/api/config.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock'

Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
