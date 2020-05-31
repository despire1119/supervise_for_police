<template>
  <div class="cases">
    <select-center>
      <template #caseList>
        <case-list v-if="caseList.length" :list="caseList" />
        <van-empty v-else description="没有该状态舆情" />
      </template>
    </select-center>
    <van-icon class="add" name="add" size="68" color="#1677fe" @click="goBaseInfo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      caseList: this.getCurrentCaseList
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCaseList'
    ])
  },
  watch: {
    '$store.state.list.currentCaseList': {
      deep: true,
      handler: function(newValue, oldValue) {
        // console.log(this)
        this.caseList = this.getCurrentCaseList
        console.log(newValue, oldValue)
      }
    }
  },
  created() {
    this.caseList = this.getCurrentCaseList
  },
  methods: {
    goBaseInfo() {
      this.$router.push({ name: 'BaseInfo', params: null })
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
  opacity .9
</style>
