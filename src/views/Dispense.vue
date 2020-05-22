<template>
  <div class="dispense">
    <div class="state-bar">
      <div class="state-line">
        <div class="dot-area active">
          <span class="dot">
            <i class="inner" />
          </span>
          <p class="des">批示</p>
        </div>
        <div class="dot-area">
          <span class="dot"><i class="inner" /></span>
          <p class="des">提醒</p>
        </div>
        <div class="dot-area">
          <span class="dot"><i class="inner" /></span>
          <p class="des">督办</p>
        </div>
      </div>
    </div>
    <div class="bg-line" />
    <div class="contain">
      <info-input
        type="date"
        title="报结期限"
        obj-key="deadLine_1"
      />
      <info-bar
        tit="拟办意见"
      />
      <info-bar
        tit="领导批示"
      />
    </div>
    <van-button class="btn-dispense" type="info" size="large">交办</van-button>
  </div>
</template>

<script>
import common from '@/mixins/common'
import InfoInput from '@/components/common/InfoInput'
import InfoBar from '@/components/result/InfoBar'

export default {
  components: {
    InfoInput,
    InfoBar
  },
  mixins: [common]
}
</script>

<style lang="stylus" scoped>
.dispense
  .state-bar
    display flex
    justify-content center
    align-items center
    height 90px
    .state-line
      display flex
      align-items center
      justify-content space-between
      width 270px
      height 1px
      background-color #9b9b9b
      .dot-area
        .dot
          display flex
          align-items center
          justify-content center
          position relative
          width 22px
          height 22px
          border-radius 22px
          background-color transparent
          .inner
            width 12px
            height 12px
            border-radius 12px
            display inline-block
            background-color #9b9b9b
        .des
          position absolute
          font-size 13px
          margin-top 7px
      .active
        width 22px
        height 22px
        border-radius 22px
        background-color rgba(22,119,254,.25)
        .dot
          .inner
            background-color #1677FE
        .des
          color #1677FE
  .bg-line
    height 10px
    background-color #f8f8f7
.btn-dispense
  width 290px
  height 40px
  margin 0 43px
</style>
