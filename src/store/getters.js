import { withBottomList } from '@/config'

export default {
  getBottomBar: state => state.base.bottomBarList,
  getCasesState: state => state.Case.casesState,
  getCurrentCaseList: state => state.Case.currentCaseList,
  getCurrentListState: state => state.Case.currentListState,
  getCurrentCase: state => state.Case.currentCase,
  getMyCases: state => state.Case.myCases,
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
  } // 提取提交信息
}
