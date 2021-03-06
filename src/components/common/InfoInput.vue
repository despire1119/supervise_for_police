<template>
  <div class="multi-input">
    <div class="info-input" :class="{'if-oneline': type !== 'textarea'}">
      <span class="tit">{{ title }}</span>
      <textarea v-if="config.type === 'textarea'" v-model="value" class="contain-area" :placeholder="placeholder" :readonly="config.readonly" />
      <input v-else-if="config.type === 'text'" v-model="value" :type="config.type" :readonly="config.readonly" class="contain" :placeholder="placeholder">
      <input v-else-if="config.type.includes('number')" v-model="value" readonly class="contain" :placeholder="placeholder" @click="handleClick">
      <div v-else class="contain" :class="{light: !value}" @click="handleClick">{{ valueToShow || placeholder }}</div>
      <i v-if="config.icon" class="icon" :style="{backgroundImage:`url(${config.icon})`}" />
    </div>
    <!-- 选择器 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        v-if="type === 'select' && !config.readonly"
        :columns="columns"
        :title="placeholder"
        show-toolbar
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
      <van-datetime-picker
        v-if="type === 'date' && !config.readonly"
        v-model="value"
        :title="placeholder"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-number-keyboard
      v-if="type.includes('number') && !config.readonly"
      v-model="value"
      :extra-key="type === 'id_number' ? 'X' : ''"
      :show="showNumber"
      @blur="showNumber = false"
    />
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
      columns: ['桥南派出所', '桥北派出所', '桥东派出所', '桥西派出所'],
      showPicker: false,
      showNumber: false,
      value: this.initValue ? this.initValue : (this.type === 'date' ? new Date() : '')
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
      (this.type === 'select' || this.type === 'date') && (this.showPicker = true)
      this.type.includes('number') && (this.showNumber = true)
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
