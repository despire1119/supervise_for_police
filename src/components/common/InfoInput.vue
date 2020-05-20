<template>
  <div class="info-input" :class="{'if-oneline': oneLine}">
    <span class="tit">{{ title }}</span>
    <input v-if="oneLine" class="contain" type="text" :placeholder="placeholder">
    <textarea v-else class="contain-area" :placeholder="placeholder" />
    <i class="icon" />
  </div>
</template>

<script>
const typeMap = {
  oneLine: {
    type: 'text',
    icon: false
  },
  select: {
    type: 'sel'
  }
}
export default {
  props: {
    oneLine: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      columns: [1, 2, 3, 4]
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
  background-color #ddd
  background-position center
</style>
