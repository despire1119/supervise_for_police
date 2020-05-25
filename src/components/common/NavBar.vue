<template>
  <!-- <nav class="nav">
    <i class="go-back" @click="goHistory" />
    <span>{{ tit }}</span>
  </nav> -->
  <van-nav-bar
    class="nav"
    left-arrow
    fixed
    @click-left="goHistory"
  >
    <template #left>
      <van-icon name="arrow-left" size="24" color="#ffffff" />
    </template>
    <template #title>
      <span class="nav">{{ tit }}</span>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    tit: {
      type: String,
      default: document.title
    }
  },
  methods: {
    goHistory() {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav
  // position fixed
  // top 0
  // left 0
  // right 0
  color #fff
  // height 44px
  // line-height 44px
  // text-align center
  font-size 18px
  background-color #1677FE
  z-index 999999
  .go-back
    position absolute
    display block
    top 13px
    left 17px
    width 9px
    height 17px
    background-position center
    background-repeat no-repeat
    background-size contain
    background-image url('~@/assets/images/back-w@2x.png')
</style>
