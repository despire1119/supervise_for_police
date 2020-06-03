<template>
  <section v-if="listToShow" class="case-list">
    <van-swipe-cell v-for="(item, index) in listToShow" :key="index">
      <div class="case" @click="goDetail(item)">
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
          <van-button v-for="(btn, innerIndex) in item.btns" :key="innerIndex" square hairline size="large" :type="btn.type" @click="handler(item, btn)">{{ btn.name }}</van-button>
        </div>
      </template>
    </van-swipe-cell>
    <van-popup
      v-model="showPeople"
      position="top"
    >
      <van-picker
        show-toolbar
        title="请选择交办领导"
        :columns="peopleList"
        @confirm="toInstruct"
        @cancel="showPeople = false"
      />
    </van-popup>
    <van-popup
      v-model="showAdvice"
      position="top"
    >
      <info-bar tit="拟办意见" :if-write="true" />
      <p class="btn-area">
        <van-button type="info" size="mini" @click="instruct">确定</van-button>
        <van-button size="mini" @click="showAdvice = false">取消</van-button>
      </p>
    </van-popup>
    <van-popup
      v-model="showResult"
      position="top"
    >
      <info-bar tit="拟办意见" />
      <info-bar tit="领导批示" />
      <p class="btn-area">
        <van-button type="info" size="mini" @click="target">确定</van-button>
        <van-button size="mini" @click="showResult = false">取消</van-button>
      </p>
    </van-popup>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoBar from '@/components/result/InfoBar'
import caseState from '@/mixins/caseState'

export default {
  components: {
    InfoBar
  },
  mixins: [caseState],
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCase'
    ])
  },
  methods: {
    toInstruct() {
      this.showPeople = false
      this.$store.commit('changeProcessState', this.getCurrentCase)
      // this.$toast.success({
      //   message: '呈请成功',
      //   duration: 0,
      //   forbidClick: true,
      //   onClose: () => {
      //   }
      // })
    },
    instruct() {
      this.showAdvice = false
      this.$store.commit('changeProcessState', this.getCurrentCase)
      // this.$toast.success({
      //   message: '呈请成功',
      //   duration: 1000,
      //   forbidClick: true,
      //   onClose: () => {
      //   }
      // })
    },
    target() {
      this.showResult = false
      this.$store.commit('changeProcessState', this.getCurrentCase)
    },
    goDetail(item) {
      switch (item.processState) {
        case 1:
          this.$router.push({ name: 'BaseInfo', params: { ...item, write: true }})
          break
        case 2:
        case 3:
          this.$router.push({ name: 'Dispense', params: item })
          break
        case 4:
        case 5:
        case 6:
        case 7:
          this.$router.push({ name: 'Result', params: item })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-toast--success
  z-index 10000000 !important
.btn-area
  display flex
  flex-direction row-reverse
  padding 8px 8px
  button
    margin-left 10px
.with-top
  margin-top 92px
  padding-bottom 20px
.van-popup--top
  margin-top 92px
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
