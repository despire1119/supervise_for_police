<template>
  <section class="case-list">
    <van-swipe-cell v-for="(item, index) in listToShow" :key="index">
      <div class="case">
        <div class="contain">
          <p><i v-if="item.processStateName" class="inner-state" :class="item.processStateClass || 'process-gray'">{{ item.processStateName }}</i><span class="tit">{{ item.tit }}</span></p>
          <p><span class="tip">登记时间</span><span class="contain">{{ item.registerTime }}</span></p>
          <p><span class="tip">登记人</span><span class="contain">{{ item.registerName }}</span></p>
          <p><span class="tip">登记形式</span><span class="contain">{{ item.way }}</span></p>
          <p><span class="tip">承办单位</span><span class="contain">{{ item.unit }}</span></p>
          <p><span class="tip">包办领导</span><span class="contain">{{ item.leader }}</span></p>
        </div>
        <span v-if="item.caseStateName && item.ifCaseState" class="state" :class="item.caseStateClass">{{ item.caseStateName }}</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template v-if="item.btns.length" #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <!-- <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history-o" size="32" color="#ef6475" />
          <van-icon name="bulb-o" size="32" color="#F5A623" /> -->
          <van-button v-for="(btn, innerIndex) in item.btns" :key="innerIndex" square hairline size="large" :type="btn.type">{{ btn.name }}</van-button>
        </div>
      </template>
    </van-swipe-cell>
  </section>
</template>

<script>
import caseState from '@/mixins/caseState'

export default {
  mixins: [caseState],
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.handler
  height 100%
  display flex
  flex-direction column-reverse
  align-items center
  justify-content space-around
  margin-right 10px
  overflow hidden
  border-radius 8px
  min-width 92px
  button
    // border-top 1px solid #fff
    border-bottom 1px solid #fff
    padding 0 14px
    flex 1
.case-list
  font-size 13px
  // margin 0 10px 76px
  margin-bottom 76px
  .case
    position relative
    // margin-top 10px
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
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      font-size 14px
      top 7px
      right 10px
      width 46px
      height 46px
      text-align center
      border-radius 23px
      padding 0 6px
    .process-green
      border-color #07c160
      color #07c160
    .process-info
      border-color #1677fe
      color #1677fe
    .process-gray
      border-color #999
      color #999
    .process-warning
      border-color #ff976a
      color #ff976a
    .info
      color #1677fe
      background-color rgba(26, 137, 250, .09)
    .warning
      color #ed6a0c
      background-color rgba(255, 151, 106, .3)
    .danger
      color #D0021B
      background-color rgba(208,2,27,.09)
    .pos-bottom
      top 57px
    .docs
      position absolute
      right 10px
      bottom 8px
    .icon-doc
      width 11px
      height 14px
      display inline-block
      margin-right 5px
      background-image url('~@/assets/images/wenjian@2x.png')
      background-size contain
      background-repeat no-repeat
</style>
