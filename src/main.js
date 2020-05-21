import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import '@/mock'
import utils from '@/mixins/utils'
import './plugins/vant.js'

import '@/assets/css/reset.styl'
import '@/assets/css/base.styl'

Vue.config.productionTip = false
Vue.mixin(utils)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
