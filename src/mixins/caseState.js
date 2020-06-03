import { mapGetters } from 'vuex'
import { processStateMap, caseStateMap, handleBtns, peopleList } from '@/config/baseInfoData'

export default {
  data() {
    return {
      currentList: this.list,
      showPeople: false,
      showAdvice: false,
      showResult: false,
      peopleList: peopleList.map(item => item.name)
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentListState',
      'getCurrentCaseList'
    ]),
    listToShow() {
      return this.filterByState(this.currentList, this.getCurrentListState).map(item => {
        item.processStateName = processStateMap[item.processState]['name'] || ''
        item.processStateClass = processStateMap[item.processState]['type'] || ''
        item.caseStateName = item.caseAbnormalState !== undefined
          ? caseStateMap['abnormalState'][item.caseAbnormalState]['name']
          : caseStateMap['normalState'][item.caseNormalState]['name']
        item.caseStateClass = item.caseAbnormalState !== undefined
          ? caseStateMap['abnormalState'][item.caseAbnormalState]['type']
          : caseStateMap['normalState'][item.caseNormalState]['type']
        // 是否显示案件状态
        // item.ifCaseState = (item.processState !== 1 || item.caseAbnormalState)
        item.ifCaseState = true
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
    // 按状态过滤列表
    filterByState(list, state) {
      return list.filter(item => {
        return state === item.processState || state === 0
      })
    },
    handler(item, btn) {
      switch (btn.key) {
        case 'modify':
          this.$router.push({ name: 'BaseInfo', params: { ...item, write: true }})
          break
        case 'del':
          // 删除案件
          // this.$store.commit('setCurrentCaseList', this.currentList.filter(eve => {
          //   return !(item.id === eve.id)
          // }))
          this.$store.commit('deleteCase', item)
          break
        case 'toInstruct':
          this.showPeople = true
          this.$store.commit('setCurrentCase', item)
          // this.$store.commit('changeProcessState', item)
          break
        case 'instruct':
          this.showAdvice = true
          this.$store.commit('setCurrentCase', item)
          break
        case 'signIn':
          this.$router.push({ name: 'Dispense', params: item })
          this.$store.commit('setCurrentCase', item)
          break
        case 'target':
        case 'goCharge':
        case 'charge':
          this.showResult = true
          break
        case 'account':
        case 'complaint':
        case 'rights':
        case 'contracting':
        case 'supervise':
          this.$store.commit('changeCaseState', Object.assign(item, { target: btn.target }))
          // this.$store.commit('setCurrentState', btn.target)
          break
        default:
          break
      }
    }
  },
  watch: {
    '$store.state.list.currentCaseList': {
      deep: true,
      handler: function(newValue, oldValue) {
        // console.log(this)
        this.currentList = this.getCurrentCaseList
      }
    }
  }
}
