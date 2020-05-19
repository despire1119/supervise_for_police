<template>
  <div class="auto-textarea">
    <textarea ref="textarea" v-model="value" :readonly="!readOnly" :style="{'height': height}" class="textarea" />
  </div>
</template>

<script>
import calcTextareaHeight from '@/utils/calcTextareaHeight'
export default {
  naem: 'auto-textarea',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    initValue: {
      type: String,
      default: ' '
    }
  },
  data() {
    return {
      value: '',
      height: '30px'
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.getHeight()
    }
  },
  created() {
    this.value = this.initValue
  },
  methods: {
    getHeight() {
      this.height = calcTextareaHeight(this.$refs.textarea, 1, null).height
    }
  }
}
</script>

<style lang="stylus" scoped>
.textarea
    width 355px
    height auto
    margin auto
    padding 10px
    background-color #f9f9f9
    border 1px solid #e5e5e5
    border-radius 4px
    outline none
</style>
