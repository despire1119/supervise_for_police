<template>
  <div class="base-info">
    <info-input
      v-for="(item, index) in baseInfoList"
      :key="index"
      :type="item.type"
      :title="item.tit"
      :placeholder="item.placeholder"
    />
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
</style>
