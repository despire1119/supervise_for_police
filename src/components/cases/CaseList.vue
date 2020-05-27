<template>
  <section class="case-list">
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">已登记</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记时间</span><span class="contain">2020-11-10 11:22:33</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">包案</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history-o" size="32" color="#ef6475" />
          <van-icon name="bulb-o" size="32" color="#F5A623" />
        </div>
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">待批示</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">交办</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history" size="32" color="#1677fe" />
          <van-icon name="bulb-o" size="32" color="#1677fe" />
        </div>
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">已批示</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">督办</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history" size="32" color="#1677fe" />
          <van-icon name="bulb-o" size="32" color="#1677fe" />
        </div>
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">待批示</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">恶意投诉</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history" size="32" color="#1677fe" />
          <van-icon name="bulb-o" size="32" color="#1677fe" />
        </div>
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">已批示</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">民警维权</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history-o" size="32" color="#1677fe" />
          <van-icon name="bulb-o" size="32" color="#1677fe" />
        </div>
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="case">
        <div class="contain">
          <p><i class="inner-state">待批示</i><span class="tit">李口收费告诉公路出入口出入口出入口出入口</span></p>
          <p><span class="tip">登记人</span><span class="contain">王建华</span></p>
          <p><span class="tip">登记形式</span><span class="contain">采访登记</span></p>
          <p><span class="tip">承办单位</span><span class="contain">北京市西直门公安派出所</span></p>
          <p><span class="tip">包办领导</span><span class="contain">王建</span></p>
        </div>
        <span class="state">问责处理</span>
        <div class="docs">
          <van-button :icon="require('@/assets/images/wenjian@2x.png')" plain round size="small" color="#1677fe">舆情文书</van-button>
        </div>
      </div>
      <template #right>
        <div class="handler">
          <!-- <p>呈请</p>
          <p>报结</p> -->
          <van-icon name="completed" size="32" color="#1677fe" />
          <van-icon name="browsing-history-o" size="32" color="#1677fe" />
          <van-icon name="bulb-o" size="32" color="#1677fe" />
        </div>
      </template>
    </van-swipe-cell>
  </section>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentList: this.list
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
  i
    padding 0 14px
.case-list
  font-size 13px
  margin-bottom 76px
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
      color #D0021B
      background-color rgba(208,2,27,.09)
      padding 0 6px
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
