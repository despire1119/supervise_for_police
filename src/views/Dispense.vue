<template>
  <div class="dispense">
    <van-steps
      class="state-bar"
      :active-color="activeColor"
      :active="active"
    >
      <van-step>交办</van-step>
      <van-step>
        <template #active-icon>
          <van-icon name="warning" color="#F5A623" />
        </template>
        <span>包案</span>
      </van-step>
      <van-step>
        <template #active-icon>
          <van-icon name="browsing-history" color="#F2260C" />
        </template>
        <span>督办</span>
      </van-step>
    </van-steps>
    <div class="bg-line" />
    <div class="contain">
      <info-input
        type="date"
        title="报结期限"
        obj-key="deadLine_1"
      />
      <info-bar
        tit="拟办意见"
        :readonly="false"
      />
      <info-bar
        tit="领导批示"
        :readonly="true"
      />
    </div>
    <div class="btn-box">
      <van-button v-if="$route.params.processState === 2" class="btn-dispense" type="info" size="normal" @click="handleClick">批示</van-button>
      <van-button v-if="$route.params.processState === 3" class="btn-dispense" type="primary" size="normal" @click="handleClick">签收</van-button>
      <van-button class="btn-dispense" type="danger" size="normal" @click="rePlay">驳回</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import common from '@/mixins/common'
import InfoInput from '@/components/common/InfoInput'
import InfoBar from '@/components/result/InfoBar'

const colorMap = ['#1677fe', '#F5A623', '#F2260C']

export default {
  components: {
    InfoInput,
    InfoBar
  },
  mixins: [common],
  data() {
    return {
      active: 0

    }
  },
  computed: {
    ...mapGetters([
      'getCurrentCase'
    ]),
    activeColor() {
      return colorMap[this.active]
    }
  },
  created() {
    this.$route.params && this.$store.commit('setCurrentCase', this.$route.params)
  },
  methods: {
    handleClick() {
      this.$store.commit('changeProcessState', this.getCurrentCase)
      this.$toast.success({
        message: this.$route.params.processState === 2 ? '批示成功' : '签收成功',
        duration: 1000,
        forbidClick: true,
        onClose: () => {
          this.$router.push({ name: 'Cases' })
        }
      })
    },
    rePlay() {
      this.$router.push({ name: 'Cases' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.dispense
  .state-bar
    padding 20px 40px
    // height 90px
    // .state-line
    //   display flex
    //   align-items center
    //   justify-content space-between
    //   width 270px
    //   height 1px
    //   background-color #9b9b9b
    //   .dot-area
    //     .dot
    //       display flex
    //       align-items center
    //       justify-content center
    //       position relative
    //       width 22px
    //       height 22px
    //       border-radius 22px
    //       background-color transparent
    //       .inner
    //         width 12px
    //         height 12px
    //         border-radius 12px
    //         display inline-block
    //         background-color #9b9b9b
    //     .des
    //       position absolute
    //       font-size 13px
    //       margin-top 7px
    //   .active
    //     width 22px
    //     height 22px
    //     border-radius 22px
    //     background-color rgba(22,119,254,.25)
    //     .dot
    //       .inner
    //         background-color #1677FE
    //     .des
    //       color #1677FE
  .bg-line
    height 10px
    background-color #f8f8f7
.btn-dispense
  width 290px
  height 40px
  margin 20px 43px 0
  line-height 40px
// .btn-box
//   height 40px
</style>
