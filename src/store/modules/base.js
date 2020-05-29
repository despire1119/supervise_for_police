export default {
  state: {
    bottomBarList: [
      {
        url: require('@/assets/images/bottomBar/home.png'),
        urlActive: require('@/assets/images/bottomBar/homeChosen.png'),
        tit: '首页',
        route: '/home',
        active: true
      },
      {
        url: require('@/assets/images/bottomBar/super.png'),
        urlActive: require('@/assets/images/bottomBar/superChosen.png'),
        tit: '监督一张网',
        route: '/charts',
        active: false
      },
      {
        url: require('@/assets/images/bottomBar/mine.png'),
        urlActive: require('@/assets/images/bottomBar/mineChosen.png'),
        tit: '我的',
        route: '/mine',
        active: false
      }
    ],
    currentState: 0
  },
  mutations: {
    setBottomBarList(state, index) {
      state.bottomBarList = state.bottomBarList.map((item, i) => {
        item.active = i === index
        return item
      })
    },
    setCurrentState(state, payload) {
      state.currentState = payload
    }
  },
  actions: {
    GET_BOTTOM({ commit }, obj) {
      commit('XXXX', obj)
    }
  }
}
