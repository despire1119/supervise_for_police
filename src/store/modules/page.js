import { withBottomList } from '@/config'

export default {
  state: {
    ifBottom: true
  },
  mutations: {
    setIfBottom(state, route) {
      state.ifBottom = withBottomList.includes(route.name)
    }
  }
}
