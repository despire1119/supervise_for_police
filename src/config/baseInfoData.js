// 案件基本信息
export const baseInfoList = [
  {
    type: 'oneLine',
    tit: '舆情概要',
    placeholder: '请填写登记人',
    key: 'tit',
    value: ''
  },
  {
    type: 'oneLine',
    tit: '登记人',
    placeholder: '请填写登记人',
    key: 'registerName',
    value: ''
  },
  {
    type: 'id_number',
    tit: '身份证',
    placeholder: '请填写登记人身份证',
    key: 'identify',
    value: ''
  },
  {
    type: 'number',
    tit: '电话',
    placeholder: '请填写电话',
    key: 'tel',
    value: ''
  },
  {
    type: 'date',
    tit: '登记时间',
    placeholder: '选择登记时间',
    key: 'registerTime',
    value: ''
  },
  {
    type: 'date',
    tit: '报结期限',
    placeholder: '选择报结时间',
    key: 'deadLine',
    value: ''
  },
  { // 展示，不填写
    type: 'select',
    tit: '登记形式',
    placeholder: '选择登记形式',
    key: 'way',
    value: ''
  },
  {
    type: 'textarea',
    tit: '主要诉求',
    placeholder: '请填写主要诉求',
    key: 'contain',
    value: ''
  },
  {
    type: 'select',
    tit: '承办单位',
    placeholder: '选择承办单位',
    key: 'unit',
    value: ''
  },
  {
    type: 'select',
    tit: '包案领导',
    placeholder: '选择包案领导',
    key: 'leader',
    value: ''
  },
  {
    type: 'textarea',
    tit: '拟办意见',
    placeholder: '请填写拟办意见',
    key: 'handler',
    value: ''
  }
]
// 流程状态表
export const processStateMap = [
  {
    name: '全部舆情',
    active: true
  },
  {
    name: '已登记',
    active: false,
    type: 'process-gray'
  },
  {
    name: '待批示',
    active: false,
    type: 'process-warning'
  },
  {
    name: '未签收',
    active: false,
    type: 'process-warning'
  },
  {
    name: '已签收',
    active: false,
    type: 'process-info'
  },
  {
    name: '待审核',
    active: false,
    type: 'process-warning'
  },
  {
    name: '待审批',
    active: false,
    type: 'process-warning'
  },
  {
    name: '已报结',
    active: false,
    type: 'process-green'
  },
  {
    name: '已超期',
    active: false,
    type: 'process-danger'
  }
]
// 案件状态
export const caseStateMap = {
  normalState: [
    {
      name: '交办',
      type: 'info',
      id: 0
    },
    {
      name: '包案',
      type: 'warning',
      id: 1
    }, {
      name: '督办',
      type: 'danger',
      id: 2
    }
  ],
  abnormalState: [
    {
      name: '民警维权',
      type: 'danger',
      id: 4
    },
    {
      name: '恶意投诉',
      type: 'danger',
      id: 3
    },
    {
      name: '问责处理',
      type: 'danger',
      id: 5
    }
  ]
}
// 操作按钮
export const handleBtns = [
  {
    key: 'del',
    name: '删除',
    auth: [[1], [0, 1, 2], [0, 1, 2]],
    type: 'danger',
    callback: () => {}
  },
  {
    key: 'modify',
    name: '修改',
    auth: [[1], [0, 1, 2], [0, 1, 2]],
    type: 'default'
  },
  {
    key: 'toInstruct',
    name: '呈请批示',
    auth: [[1], [0, 1, 2], [0, 1, 2]],
    type: 'info'
  },
  {
    key: 'instruct',
    name: '批示',
    auth: [[2], [0, 1, 2], [0, 1, 2]],
    type: 'info'
  },
  {
    key: 'signIn',
    name: '签收',
    auth: [[3], [0, 1, 2], [0, 1, 2]],
    type: 'primary'
  },
  {
    key: 'target',
    name: '报结', // 发起报结
    auth: [[4], [0, 1, 2], [0, 1, 2]],
    type: 'default'
  },
  {
    key: 'goCharge',
    name: '审核', // 信访部门审核
    auth: [[5], [0, 1, 2], [0, 1, 2]],
    type: 'warning'
  },
  {
    key: 'charge',
    name: '审批', // 领导审批
    auth: [[6], [0, 1, 2], [0, 1, 2]],
    type: 'info'
  },
  {
    key: 'contracting',
    name: '呈请包案',
    auth: [[8], [0], [0, 1, 2]],
    target: 1,
    type: 'warning'
  },
  {
    key: 'supervise',
    name: '呈请督办',
    auth: [[8], [1], [0, 1, 2]],
    target: 2,
    type: 'danger'
  },
  {
    key: 'rights',
    name: '呈请维权',
    auth: [[7], [0, 1, 2], []],
    target: 0,
    type: 'danger'
  },
  {
    key: 'complaint',
    name: '恶意投诉',
    auth: [[7], [0, 1, 2], []],
    target: 1,
    type: 'danger'
  },
  {
    key: 'account',
    name: '问责处理',
    auth: [[7], [0, 1, 2], []],
    target: 2,
    type: 'danger'
  }
]
// 案件列表
export const caseList = [
  {
    id: '00001',
    tit: '完整流程案件完整流程案件完整流程案件完整流程案件',
    registerTime: '2020-10-20 11:22:33',
    deadLine: '2020-10-30 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 1,
    caseNormalState: 0,
    ifMine: 0,
    identify: '402291199212929934',
    tel: '15695290520',
    contain: '主要诉求主要诉求主要诉求主要诉求主要诉求主要诉求',
    handler: '拟办意见拟办意见拟办意见拟办意见拟办意见拟办意见拟办意见'
  },
  {
    id: '00002',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 7,
    caseNormalState: 1,
    caseAbnormalState: 0,
    ifMine: 1
  },
  {
    id: '00003',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 3,
    caseNormalState: 2,
    caseAbnormalState: 1,
    ifMine: 1
  },
  {
    id: '00004',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 4,
    caseNormalState: 2,
    // caseAbnormalState: 2,
    ifMine: 1
  },
  {
    id: '00005',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 7,
    caseNormalState: 1,
    caseAbnormalState: 2,
    ifMine: 1
  },
  {
    id: '00006',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 6,
    caseNormalState: 0,
    // caseAbnormalState: 4,
    ifMine: 1
  },
  {
    id: '00007',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 1,
    caseNormalState: 1,
    // caseAbnormalState: 0,
    ifMine: 1
  },
  {
    id: '00008',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 2,
    caseNormalState: 0,
    // caseAbnormalState: 2,
    ifMine: 0
  },
  {
    id: '00009',
    tit: '舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称舆情名称',
    registerTime: '2020-10-20 11:22:33',
    registerName: '王建华',
    way: '采访登记',
    unit: '桥南派出所',
    leader: '唐局长',
    processState: 3,
    caseNormalState: 0,
    caseAbnormalState: 0,
    ifMine: 0
  }
]
