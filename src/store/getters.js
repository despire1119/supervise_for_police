export default {
  getBottomBar: state => state.base.bottomBarList,
  getCasesState: state => state.list.casesState,
  getMyCases: state => state.list.myCases,
  getCurrentCaseState: state => state.caseState.currentCaseState,
  getIfBottom: state => state.page.ifBottom
}
