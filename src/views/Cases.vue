<template>
  <div class="cases">
    <nav-bar />
    <select-center />
    <case-list />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import SelectCenter from '@/components/cases/SelectCenter'
import CaseList from '@/components/cases/CaseList'
import common from '@/mixins/common'

export default {
  components: {
    NavBar,
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
  padding-top 172px
</style>
