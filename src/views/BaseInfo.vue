<template>
  <div class="base-info">
    <info-input
      v-for="(item, index) in baseInfoList"
      :key="index"
      :type="item.type"
      :title="item.tit"
      :obj-key="item.key"
      :placeholder="item.placeholder"
      :init-value="item.value"
    />
    <div class="btn-area">
      <van-button
        v-if="$route.params.processState === 1"
        :loading="false"
        loading-text="正在生成舆情"
        text="呈请批示"
        type="info"
        size="large"
        @click="clickHandler"
      />
      <van-button
        v-if="$route.params.processState === 2"
        :loading="false"
        loading-text="正在生成舆情"
        text="批示"
        type="info"
        size="large"
        @click="goSignIn"
      />
      <van-button
        v-if="$route.params.processState === 1"
        :loading="false"
        text="保存"
        type="info"
        size="large"
        style="margin-top: 20px;background: #f1f1f1;border-color: #f1f1f1"
        @click="save"
      />
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        v-model="leader"
        show-toolbar
        title="请选择交办领导"
        :columns="peopleList"
        @confirm="assign"
        @cancel="showPicker=false"
      />
    </van-popup>
  </div>
</template>

<script>
import { peopleList } from '@/config/baseInfoData'
import { mapGetters } from 'vuex'
import common from '@/mixins/common'
import baseInfo from '@/mixins/baseInfo'
import InfoInput from '@/components/common/InfoInput'

export default {
  components: {
    InfoInput
  },
  mixins: [common, baseInfo],
  props: {
    column: {
      type: Array,
      default: () => ['value', 'test', '123']
    }
  },
  data() {
    return {
      showPicker: false,
      leader: '',
      peopleList: peopleList.map(item => item.name)
    }
  },
  computed: {
    ...mapGetters([
      'getBaseInfoToCommit',
      'getCurrentCase'
    ])
  },
  created() {
    this.$route.params && this.$store.commit('setCurrentCase', this.$route.params)
  },
  methods: {
    addCase() {
      this.$store.commit('setCurrentCase', Object.assign(this.getBaseInfoToCommit, { id: this.getCurrentCase.id || this.$route.params.id || '' }))
      this.$store.commit('addCurrentCaseList', this.getCurrentCase)
    },
    clickHandler() {
      this.showPicker = true
    },
    assign() {
      this.addCase()
      this.$store.commit('changeProcessState', this.getCurrentCase)
      this.showPicker = false
      this.$toast.success({
        message: '呈请成功',
        duration: 1000,
        forbidClick: true,
        onClose: () => {
          this.$router.push({ name: 'Cases' })
        }
      })
    },
    save() {
      this.addCase()
      this.$toast.success({
        message: '保存成功',
        duration: 1000,
        forbidClick: true,
        onClose: () => {
          this.$router.push({ name: 'Cases' })
        }
      })
    },
    goSignIn() {
      this.$store.commit('changeProcessState', this.getCurrentCase)
      this.$toast.success({
        message: '批示成功',
        duration: 1000,
        forbidClick: true,
        onClose: () => {
          this.$router.push({ name: 'Cases' })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-info
  font-size 15px
.btn-area
  padding 34px
  padding-bottom 0
  button
    height 40px
</style>
