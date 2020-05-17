import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'
import list from './modules/list'
import case from './modules/case'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    list,
    case
  },
  getters
})
