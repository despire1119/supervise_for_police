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

export default {
  components: {
    NavBar,
    SelectCenter,
    CaseList
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
