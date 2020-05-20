<template>
  <div class="multi-input">
    <div class="info-input" :class="{'if-oneline': type !== 'textarea'}">
      <span class="tit">{{ title }}</span>
      <textarea v-if="config.type === 'textarea'" v-model="value" class="contain-area" :placeholder="placeholder" />
      <input v-else-if="config.type === 'text'" v-model="value" :type="config.type" class="contain" :placeholder="placeholder">
      <div v-else class="contain" :class="{light: !value}" @click="handleClick">{{ (type === 'date' ? valueToShow : value) || placeholder }}</div>
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
        @change="onChange"
      />
      <van-datetime-picker
        v-if="type === 'date'"
        v-model="value"
        :title="placeholder"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
import multiInput from '@/config/multiInput'

export default {
  props: {
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
      value: ''
    }
  },
  computed: {
    valueToShow() {
      return this.value
    }
  },
  methods: {
    onConfirm(value) {
      // console.log(item)
      this.showPicker = false
    },
    handleClick() {
      switch (this.type) {
        case 'select':
          this.value = this.initValue
          break
        case 'date':
          this.value = new Date()
          break
        default:
          break
      }
      this.type && (this.showPicker = true)
    },
    onChange(picker, value, index) {
      switch (this.type) {
        case 'select':
          this.value = value
          break
        case 'date':
          console.log(this.value)
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
