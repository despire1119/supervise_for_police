import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import base from './modules/base'
import list from './modules/list'
import Case from './modules/case'
import page from './modules/page'
// import case from './modules/case'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    list,
    Case,
    page
  },
  getters
  // plugins: [createPersistedState()]
})
