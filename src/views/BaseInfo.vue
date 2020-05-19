<template>
  <div class="base-info">
    <nav-bar />
    <div>
      基本信息
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import common from '@/mixins/common'

export default {
  components: {
    NavBar
  },
  mixins: [common],
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
.base-info
  font-size 15px
</style>
