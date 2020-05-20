<template>
  <ul class="case-list">
    <li class="case">
      <div class="contain">
        <p><i class="inner-state">已超期</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
        <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
        <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
        <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
        <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
      </div>
      <span class="state">督办</span>
      <div class="docs"><i class="icon-doc" /><button>舆情文书</button></div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.case-list
  font-size 13px
  padding-bottom 24px
  .case
    position relative
    margin 10px 10px 0
    background-color #fff
    box-shadow 0px 0px 4px 0px rgba(0,0,0,0.15)
    padding 10px 8px 15px
    border-radius 2px
    p
      display flex
      align-items center
      &:not(:last-child)
        margin-bottom 15px
    .inner-state
      display inline-block
      padding 2px 4px
      border 1px solid #D0021B
      border-radius 2px
      color #D0021B
      margin-right 8px
    .tit
      display inline-block
      width 192px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .tip
      color #666666
      display inline-block
      min-width 52px
      text-align right
      margin-right 10px
    .state
      position absolute
      display block
      top 7px
      right 10px
      width 40px
      height 40px
      line-height 40px
      text-align center
      border-radius 20px
      color #D0021B
      background-color rgba(208,2,27,.09)
    .docs
      position absolute
      display flex
      justify-content center
      align-items center
      right 10px
      bottom 8px
      color #1677FE
      width 88px
      height 30px
      border 1px solid #1677FE
      border-radius 15px
      background-color #fff
      font-size 13px
      button
        margin: 0;
        color #1677FE
        padding: 0;
        border: 1px solid transparent;
        background-color transparent
    .icon-doc
      width 11px
      height 14px
      display inline-block
      margin-right 5px
      background-image url('~@/assets/images/wenjian@2x.png')
      background-size contain
      background-repeat no-repeat
</style>
