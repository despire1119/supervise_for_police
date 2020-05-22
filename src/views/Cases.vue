<template>
  <div class="cases">
    <select-center>
      <template #caseList>
        <case-list />
      </template>
    </select-center>
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
  position relative
  padding-top 128px
  padding-bottom 76px
</style>
