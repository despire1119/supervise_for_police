import { withBottomList } from '@/config'

export default {
  state: {
    ifTop: true,
    ifBottom: true,
    currentTitle: '首页'
  },
  mutations: {
    setIfTop(state, route) {
      state.ifTop = route.name !== 'Home'
    },
    setIfBottom(state, route) {
      state.ifBottom = withBottomList.includes(route.name)
    },
    setCurrentTitle(state, route) {
      state.currentTitle = route.meta.title || '首页'
    }
  }
}
