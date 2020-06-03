import { processStateMap, caseList } from '@/config/baseInfoData'

export default {
  state: {
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
    currentListState: 0,
    currentCase: null,
    casesState: processStateMap,
    currentCaseList: caseList
  },
  mutations: {
    ifMyCases(state, id) {
      state.myCases = state.myCases.map(item => {
        item.active = item.id === id
        return item
      })
    },
    setCurrentState(state, payload) {
      state.currentListState = payload
    },
    setCurrentCase(state, payload) {
      state.currentCase = payload
    },
    chooseCase(state, id) {
      state.casesState = state.casesState.map(item => {
        item.active = item.id === id
        return item
      })
    },
    setCurrentCaseList(state, payload) {
      state.currentCaseList = payload
    },
    addCurrentCaseList(state, payload) {
      if (state.currentCaseList.map(item => item.id).includes(payload.id)) {
        // 修改案件
        state.currentCaseList = state.currentCaseList.map(inner => {
          return inner.id === payload.id ? (inner = Object.assign(inner, payload)) : inner
        })
      } else {
        // 新增案件
        state.currentCaseList = [{ ...payload, id: `0000${state.currentCaseList.length}`, processState: 1, caseNormalState: 0 }, ...state.currentCaseList]
        state.currentCase.id = state.currentCaseList[0]['id']
        console.log(state.currentCaseList)
      }
      // state.currentCaseList = [{ ...payload, id: `0000${state.currentCaseList.length}`, processState: 1, caseNormalState: 0 }, ...state.currentCaseList]
    },
    changeProcessState(state, payload) {
      state.currentCaseList = state.currentCaseList.map(eve => {
        if (payload.id === eve.id) {
          eve.processState++
        }
        return eve
      })
    },
    changeCaseState(state, payload) {
      state.currentCaseList = state.currentCaseList.map(eve => {
        if (payload.id === eve.id) {
          // if (eve.caseAbnormalState) {
          //   eve.caseNormalState = 0
          //   eve.processState = 1
          // } else {
          //   eve.caseAbnormalState =
          // }
          if (payload.caseAbnormalState === undefined) {
            eve.processState = 1
            eve.caseNormalState++
          } else {
            eve.caseAbnormalState = payload.target
            eve.caseNormalState = 0
            eve.processState = 1
          }
        }
        return eve
      })
    },
    deleteCase(state, payload) {
      state.currentCaseList = state.currentCaseList.filter(eve => {
        return !(payload.id === eve.id)
      })
    }
  }
}
