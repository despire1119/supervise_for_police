import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import '@/mock'

import '@/assets/css/reset.styl'
import '@/assets/css/base.styl'
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
