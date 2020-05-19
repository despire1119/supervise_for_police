import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'
import list from './modules/list'
import caseState from './modules/caseState'
import page from './modules/page'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    list,
    caseState,
    page
  },
  getters
})
