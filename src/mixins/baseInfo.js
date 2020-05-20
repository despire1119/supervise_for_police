import { baseInfoList } from '@/config/baseInfoData'

export default {
  data() {
    return {
      baseInfoList: []
    }
  },
  created() {
    this.baseInfoList = baseInfoList
  }
}
