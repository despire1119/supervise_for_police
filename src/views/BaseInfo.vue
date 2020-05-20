<template>
  <div class="base-info">
    <info-input
      v-for="(item, index) in baseInfoList"
      :key="index"
      :one-line="item.oneLine"
      :title="item.tit"
      :placeholder="item.placeholder"
    />
    <vant-picker></vant-picker>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import common from '@/mixins/common'
import baseInfo from '@/mixins/baseInfo'
import InfoInput from '@/components/common/InfoInput'

export default {
  components: {
    InfoInput
  },
  mixins: [common, baseInfo],
  computed: {
    ...mapGetters([
      'getBaseInfoToCommit'
    ])
  },
  created() {
    console.log('getBase', this.getBaseInfoToCommit)
  }
}
</script>

<style lang="stylus" scoped>
.base-info
  font-size 15px
</style>
