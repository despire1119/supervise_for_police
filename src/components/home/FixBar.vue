<template>
  <div class="fix-bar">
    <div class="card">
      <p class="tit">工作预警</p>
      <div class="contain"><span>扫黑除恶事件</span><span class="warning"><i class="icon" />代办</span></div>
    </div>
    <div class="card">
      <p class="tit">超期预警</p>
      <div class="contain"><span>人民路扫黑除恶</span><span class="overlay"><i class="icon" />已逾期</span></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.fix-bar
  position fixed
  display flex
  bottom 65px
  left 50%
  margin-left -177px
  width 355px
  height 50px
  background-color rgba(0, 0, 0, .85)
  border-radius 4px
  .card
    flex 1
    color #fff
    font-size 13px
    margin 8px 0 8px
    padding 0 15px 0 10px
    &:not(:last-child)
      border-right 1px solid rgba(255, 255, 255, .5)
    .contain
      display flex
      font-size 11px
      justify-content space-between
      align-items center
      .warning
        color #F8E71C
      .overlay
        color #FF003C
</style>
