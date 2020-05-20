export default {
  getBottomBar: state => state.base.bottomBarList,
  getCasesState: state => state.list.casesState,
  getMyCases: state => state.list.myCases,
  getCurrentCaseState: state => state.caseState.currentCaseState,
  getIfBottom: state => state.page.ifBottom,
  getIfTop: state => state.page.ifTop,
  getCurrentTitle: state => state.page.currentTitle,
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
