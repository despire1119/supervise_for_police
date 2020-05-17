import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'
import list from './modules/list'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    list
  },
  getters
})
