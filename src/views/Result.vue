<template>
  <div>
    <div class="header">
      <p class="tit">宿迁收费高速公路出入口</p>
      <p class="info">
        <span><i>报结期限：</i><i class="date">2020/05/30</i></span>
        <span><i>状态：</i><i>已签收</i></span>
      </p>
    </div>
    <div class="info-area">
      <info-bar tit="拟办意见" />
      <info-bar tit="领导批示" />
      <info-bar tit="单位签收" init-value="签字" />
      <info-bar tit="处理结果" init-value="同意批示" />
    </div>
    <p class="handler">
      <van-button class="info-inner" type="info" @click="replay">报结呈请</van-button>
    </p>
    <p class="handler">
      <van-button class="info-inner" type="primary" @click="replay">审核通过</van-button>
    </p>
    <p class="handler">
      <van-button class="info-inner" type="warning" @click="replay">予以报结</van-button>
    </p>
    <p class="handler">
      <van-button type="danger" @click="replay">驳回</van-button>
    </p>
  </div>
</template>

<script>
import InfoBar from '@/components/result/InfoBar'
import common from '@/mixins/common'

export default {
  components: {
    InfoBar
  },
  mixins: [common],
  methods: {
    replay() {
      this.$router.push({ name: 'Cases' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color #F8F8F7
  padding-bottom 10px
.tit
  color #000
  font-size 18px
  text-align center
  padding-top 12px
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
  background-color #fff
  padding-bottom 20px
.handler
  display flex
  justify-content space-around
  margin auto
  margin-top 25px
  // .info-inner
  //   background-color #1677fe
  button
    font-size 16px
    color #fff
    text-align center
    line-height 40px
    width 290px
    height 40px
    border 0
    border-radius 4px
</style>
