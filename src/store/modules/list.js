import { baseInfoList, processStateMap, caseList } from '@/config/baseInfoData'

export default {
  state: {
    casesState: processStateMap,
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
    baseInfo: baseInfoList,
    currentCaseList: caseList
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
    },
    setCurrentCaseList(state, payload) {
      state.currentCaseList = payload
    }
  }
}
