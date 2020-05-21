<template>
  <div class="base-info">
    <info-input
      v-for="(item, index) in baseInfoList"
      :key="index"
      :type="item.type"
      :title="item.tit"
      :obj-key="item.key"
      :placeholder="item.placeholder"
    />
    <div class="btn-area">
      <van-button
        :loading="false"
        loading-text="正在生成舆情"
        text="下一步"
        type="info"
        size="large"
      />
    </div>

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
  props: {
    column: {
      type: Array,
      default: () => ['value', 'test', '123']
    }
  },
  data() {
    return {
    }
  },
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
.btn-area
  padding 34px
  padding-bottom 0
</style>
