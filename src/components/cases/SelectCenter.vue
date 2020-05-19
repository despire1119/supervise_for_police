<template>
  <div class="select-center">
    <nav class="nav">
      <span v-for="item in getCasesState" :key="item.id" :class="{active: item.active}" @click="choose(item.id)">{{ item.name }}</span>
    </nav>
    <div class="search">
      <p class="search-bar">
        <i class="icon" />
        <input type="text" placeholder="请输入案件名称">
      </p>
    </div>
    <nav class="if-mine">
      <div v-for="(item, index) in getMyCases" :key="index" class="card" :class="{active: item.active}" @click="chooseMine(item.id)">{{ item.name }}</div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getCasesState',
      'getMyCases'
    ])
  },
  methods: {
    choose(id) {
      this.$store.commit('chooseCase', id)
    },
    chooseMine(id) {
      this.$store.commit('ifMyCases', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.select-center
  position fixed
  top 44px
  left 0
  right 0
  z-index 9999
  .nav
    display flex
    justify-content space-around
    align-items center
    height 40px
    line-height 40px
    border-top 1px solid rgba(218,232,255,0.43)
    background-color #1677FE
    color #DAE8FF
    font-size 14px
    font-weight 500
    span
      transition all .15s ease-in-out
      line-height 40px
      &.active
        color #fff
        font-size 16px
  .search
    display flex
    height 48px
    justify-content center
    align-items center
    background-color #fff
    .search-bar
      display flex
      align-items center
      width 355px
      height 32px
      border 1px solid #e5e5e5
      border-radius 16px
      background-color #fff
      overflow hidden
      i.icon
        width 16px
        height 16px
        margin-left 12px
        background-image url('~@/assets/images/fangdajing@2x.png')
        background-repeat no-repeat
        background-size contain
      input
        flex 1
        height 100%
        border 0
        margin-left 8px
        line-height 32px
        font-size 14px
        outline none
        background-color transparent
        color #333
      ::-webkit-input-placeholder
        color #9B9B9B
  .if-mine
    display flex
    justify-content space-around
    align-items center
    font-size 15px
    color #333333
    padding-bottom 5px
    background-color #F8F8F7
    .card
      padding 12px 0 6px
      border-bottom 2px solid transparent
    .active
      color #1677FE
      border-color #1677FE
</style>
