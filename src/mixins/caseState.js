import { mapGetters } from 'vuex'
import { processStateMap, caseStateMap, handleBtns } from '@/config/baseInfoData'

export default {
  data() {
    return {
      currentList: this.list
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentState'
    ]),
    listToShow() {
      return this.filterByState(this.currentList, this.getCurrentState).map(item => {
        item.processStateName = processStateMap[item.processState]['name'] || ''
        item.processStateClass = processStateMap[item.processState]['type'] || ''
        item.caseStateName = item.caseAbnormalState
          ? caseStateMap['abnormalState'][item.caseAbnormalState]['name']
          : caseStateMap['normalState'][item.caseNormalState]['name']
        item.caseStateClass = item.caseAbnormalState
          ? caseStateMap['abnormalState'][item.caseAbnormalState]['type']
          : caseStateMap['normalState'][item.caseNormalState]['type']
        // 案件状态
        item.ifCaseState = item.processState !== 1
        // 按钮
        item.btns = handleBtns.filter(eve => {
          const ifProcess = eve.auth[0].includes(item.processState)
          const ifNormalState = eve.auth[1].includes(item.caseNormalState)
          const ifAbNormalState = eve.auth[2].includes(item.caseAbnormalState)
          return ifProcess && (ifNormalState || ifAbNormalState)
          // return eve.auth[0].includes(item.processState) && eve.auth[1].includes(item.caseNormalState) && !(eve.auth[2].length && eve.auth[2].includes(item.caseAbnormalState))
        })
        return item
      })
    }
  },
  methods: {
    filterByState(list, state) {
      return list.filter(item => {
        return state === item.processState || state === 0
      })
    }
  }
}
