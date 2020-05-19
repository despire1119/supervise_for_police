<template>
  <div class="with-top">
    <nav-bar />
    <p class="tit">宿迁收费高速公路出入口</p>
    <p class="info">
      <span><i>报结期限：</i><i class="date">2020/05/30</i></span>
      <span><i>状态：</i><i>已签收</i></span>
    </p>
    <div class="info-area">
      <info-bar tit="填写数据" />
      <info-bar tit="领导批示" />
      <info-bar tit="单位签收" init-value="签字" />
      <info-bar tit="处理结果" init-value="同意批示" />
    </div>
    <p class="handler">
      <button>报结呈请</button>
    </p>
    <p class="handler">
      <button style="background-color: #F2260C">申诉</button>
    </p>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import InfoBar from '@/components/result/InfoBar'
import common from '@/mixins/common'
export default {
  components: {
    NavBar,
    InfoBar
  },
  mixins: [common]
}
</script>

<style lang="stylus" scoped>
.tit
  color #000
  font-size 18px
  text-align center
  margin-top 12px
  margin-bottom 8px
.info
  display flex
  justify-content space-between
  padding 0 7px
  font-size 14px
  color #666
  .date
    color #333
.info-area
  margin-top 10px
  background-color #fff
  padding-bottom 20px
.handler
  display flex
  justify-content space-around
  margin auto
  margin-top 25px
  button
    font-size 16px
    color #fff
    text-align center
    line-height 40px
    width 290px
    height 40px
    background-color #1677FE
    border 0
    border-radius 4px
</style>
