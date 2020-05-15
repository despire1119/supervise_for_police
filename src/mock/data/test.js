export default {
  login: data => {
    return {
      role: data
    }
  },
  getToasts: () => {
    return [
      {
        tit: '按照公务员主管部门同意部署公安机关面向社招公告'
      },
      {
        tit: '关于全省公安机关面向社会赵璐人民警察有关事项公告'
      }
    ]
  }
}
