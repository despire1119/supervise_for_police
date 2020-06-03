import { baseInfoList } from '@/config/baseInfoData'

export default {
  state: {
    baseInfo: baseInfoList
  },
  mutations: {
    setBaseInfo(state, payload) {
      const [ret] = Object.entries(payload)
      return state.baseInfo.map(item => {
        item.key === ret[0] && (item.value = ret[1])
        return item
      })
    }
  }
}
