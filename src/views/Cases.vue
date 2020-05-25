<template>
  <div class="cases">
    <select-center>
      <template #caseList>
        <case-list />
      </template>
    </select-center>
    <van-icon class="add" name="add" size="74" color="#1677fe" />
  </div>
</template>

<script>
import SelectCenter from '@/components/cases/SelectCenter'
import CaseList from '@/components/cases/CaseList'
import common from '@/mixins/common'

export default {
  components: {
    SelectCenter,
    CaseList
  },
  mixins: [common],
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.cases
  position absolute
  padding-bottom 76px
  top 0
  right 0
  bottom 0
  left 0
.add
  position fixed
  bottom 94px
  right 3px
  z-index 9999999
</style>
