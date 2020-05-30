export default {
  state: {
    currentRoute: {}
  },
  mutations: {
    setCurrentRoute(state, route) {
      // state.currentTitle = route.meta.title || '首页'
      state.currentRoute = route || {}
    }
  }
}
