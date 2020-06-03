import { baseInfoList } from '@/config/baseInfoData'

export default {
  data() {
    return {
      baseInfoList: []
    }
  },
  created() {
    if (this.$route.params) {
      this.baseInfoList = baseInfoList.map(eve => {
        eve.readonly = !this.$route.params.write
        if (this.$route.params[eve.key]) {
          eve.value = this.$route.params[eve.key]
        } else {
          eve.value = ''
        }
        return eve
      })
    }
    // console.log(this.baseInfoList)
  }
}
