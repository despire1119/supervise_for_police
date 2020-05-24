import { baseInfoList } from '@/config/baseInfoData'

export default {
  state: {
    casesState: [
      {
        name: '全部舆情',
        id: 0,
        active: true
      },
      {
        name: '待处理',
        id: 1,
        active: true
      },
      {
        name: '已处理',
        id: 2,
        active: false
      },
      {
        name: '超期未結',
        id: 3,
        active: false
      },
      {
        name: '超期已結',
        id: 4,
        active: false
      }
    ],
    myCases: [
      {
        name: '我的輿情',
        id: 'mine',
        active: true
      },
      {
        name: '所有輿情',
        id: 'all',
        active: false
      }
    ],
    baseInfo: baseInfoList
  },
  mutations: {
    chooseCase(state, id) {
      state.casesState = state.casesState.map(item => {
        item.active = item.id === id
        return item
      })
    },
    ifMyCases(state, id) {
      state.myCases = state.myCases.map(item => {
        item.active = item.id === id
        return item
      })
    },
    setBaseInfo(state, payload) {
      const [ret] = Object.entries(payload)
      return state.baseInfo.map(item => {
        item.key === ret[0] && (item.value = ret[1])
        return item
      })
    }
  }
}
