<template>
  <div class="info-input" :class="{'if-oneline': type !== 'textarea'}">
    <span class="tit">{{ title }}</span>
    <textarea v-if="config.type === 'textarea'" class="contain-area" :placeholder="placeholder" />
    <input v-else-if="config.type === 'text'" :type="config.type" class="contain" :placeholder="placeholder">
    <div v-else class="contain" :class="{light: !value}">{{ placeholder }}</div>
    <!-- <i v-if="config.icon" :style='`background-image: ${config.icon}`' class="icon" /> -->
    <i v-if="config.icon" class="icon" :style="{backgroundImage:`url(${config.icon})`}" />
  </div>
</template>

<script>
const iconMap = {
  angleDown: require('@/assets/images/angledown@2x.png'),
  date: require('@/assets/images/riqiiconx@2x.png')
}
const typeMap = {
  oneLine: {
    type: 'text',
    icon: ''
  },
  select: {
    type: 'selector',
    icon: iconMap.angleDown
  },
  date: {
    type: 'date',
    icon: iconMap.date
  },
  textarea: {
    type: 'textarea',
    icon: ''
  }
}
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
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      config: typeMap[this.type],
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
