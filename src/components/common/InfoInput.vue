<template>
  <div class="multi-input">
    <div class="info-input" :class="{'if-oneline': type !== 'textarea'}">
      <span class="tit">{{ title }}</span>
      <textarea v-if="config.type === 'textarea'" v-model="value" class="contain-area" :placeholder="placeholder" />
      <input v-else-if="config.type === 'text'" v-model="value" :type="config.type" class="contain" :placeholder="placeholder">
      <div v-else class="contain" :class="{light: !value}" @click="handleClick">{{ valueToShow || placeholder }}</div>
      <i v-if="config.icon" class="icon" :style="{backgroundImage:`url(${config.icon})`}" />
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        v-if="type === 'select'"
        :columns="columns"
        :title="placeholder"
        show-toolbar
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
      <van-datetime-picker
        v-if="type === 'date'"
        v-model="value"
        :title="placeholder"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import multiInput from '@/config/multiInput'

export default {
  props: {
    objKey: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'oneLine'
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    initValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      config: multiInput[this.type],
      columns: [1, 2, 3, 4],
      showPicker: false,
      value: this.type === 'date' ? new Date() : ''
    }
  },
  computed: {
    ...mapGetters([
      'getBaseInfoToCommit'
    ]),
    valueToShow() {
      return this.value instanceof Date ? this.dateFormate('YYYY-mm-dd HH:MM', this.value) : this.value
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.$store.commit('setBaseInfo', { [this.objKey]: newValue })
      console.log(this.getBaseInfoToCommit)
    }
  },
  methods: {
    onConfirm(value) {
      // console.log(item)
      this.value = value
      this.showPicker = false
    },
    handleClick() {
      // switch (this.type) {
      //   case 'select':
      //     this.value = this.initValue || this.columns[0]
      //     break
      //   case 'date':
      //     this.value = new Date()
      //     break
      //   default:
      //     break
      // }
      // this.type === 'date' && !this.value && (this.value = new Date())
      this.type && (this.showPicker = true)
    },
    onChange(picker, value, index) {
      this.value = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.multi-input
  font-size 15px
.info-input
  display flex
  align-items flex-start
  height 100px
  margin 0 10px
  padding 10px 0
  border-bottom 1px solid #E5E5E5
  color #666
  .tit
    display inline-block
    min-width 60px
    margin-right 20px
  .contain
    flex 1
    font-size 15px
  .light
    color #9B9B9B
  .contain-area
    flex 1
    font-size 15px
    height 78px
  ::-webkit-input-placeholder
      color #9B9B9B
.if-oneline
  align-items center
  height 50px
.icon
  display inline-block
  width 14px
  height 100%
  margin-right 10px
  background-size contain
  background-position center
  background-repeat no-repeat
  // background-image url('~@/assets/images/angledown@2x.png')
</style>
