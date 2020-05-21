export default {
  methods: {
    dateFormate(fmt, date) {
      let ret = ''
      const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString() // 秒
      }
      for (const key in opt) {
        ret = new RegExp(`(${key})`).exec(fmt)
        if (ret) fmt = fmt.replace(ret[1], (ret[1].length === 1 ? (opt[key]) : (opt[key].padStart(ret[1].length, '0'))))
      }
      return fmt
    }
  }
}
