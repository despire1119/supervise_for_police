<template>
  <div class="cases">
    <select-center />
    <case-list />
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
  padding-top 128px
</style>
