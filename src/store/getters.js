import { withBottomList } from '@/config'

export default {
  getBottomBar: state => state.base.bottomBarList,
  getCasesState: state => state.list.casesState,
  getMyCases: state => state.list.myCases,
  getCurrentCaseState: state => state.caseState.currentCaseState,
  getIfBottom: state => withBottomList.includes(state.page.currentRoute.name),
  getIfTop: state => state.page.currentRoute.name !== 'Home',
  getCurrentTitle: state => state.page.currentRoute.meta ? state.page.currentRoute.meta.title : '首页',
  getBaseInfoToCommit: state => {
    const obj = {}
    state.list.baseInfo.forEach(item => {
      Object.assign(obj, {
        [item.key]: item.value
      })
    })
    return obj
  }, // 提取提交信息
  getCurrentState: state => state.base.currentState,
  getCurrentCaseList: state => state.list.currentCaseList
}
