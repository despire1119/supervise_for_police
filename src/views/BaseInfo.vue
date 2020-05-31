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
        :loading="false"
        loading-text="正在生成舆情"
        text="呈请批示"
        type="info"
        size="large"
        @click="clickHandler"
      />
      <van-button
        :loading="false"
        text="保存"
        type="info"
        size="large"
        style="margin-top: 20px;background: #f1f1f1;border-color: #f1f1f1"
        @click="save"
      />
    </div>

  </div>
</template>

<script>
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
    }
  },
  computed: {
    ...mapGetters([
      'getBaseInfoToCommit'
    ])
  },
  created() {
    console.log('11111111111', this.$route.params.id)
  },
  methods: {
    clickHandler() {
      this.$router.push({ name: 'Dispense' })
    },
    save() {
      console.log(this.$route.params)
      this.$store.commit('addCurrentCaseList', Object.assign(this.getBaseInfoToCommit, { id: this.$route.params.id || '' }))
      this.$router.push({ name: 'Cases' })
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
