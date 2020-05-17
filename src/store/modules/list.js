export default {
  state: {
    casesState: [
      {
        name: '待处理',
        id: 0,
        active: true
      },
      {
        name: '已处理',
        id: 1,
        active: false
      },
      {
        name: '超期未处理',
        id: 2,
        active: false
      },
      {
        name: '超期已处理',
        id: 3,
        active: false
      }
    ],
    myCases: [
      {
        name: '我的案件',
        id: 'mine',
        active: true
      },
      {
        name: '所有案件',
        id: 'all',
        active: false
      }
    ]
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
    }
  }
}
