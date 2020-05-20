<template>
  <div class="info-bar">
    <p class="tit">{{ tit }}</p>
    <!-- <div contenteditable="true" class="contain" readonly>
      收发文办理是机关工作人员一项重要技能，而拟办意见的撰写是收文办理工作的核心，拟办意见是指：收文单位文秘部门对所对收到的文件提出的宋负责人审批
    </div> -->
    <auto-textarea :readonly="true" :init-value="initValue" />
  </div>
</template>

<script>
import AutoTextarea from '@/components/common/AutoTextarea'

export default {
  components: {
    AutoTextarea
  },
  props: {
    tit: {
      type: String,
      default: '拟办意见'
    },
    initValue: {
      type: String,
      default: '收发文办理是机关工作人员一项重要技能，而拟办意见的撰写是收文办理工作的核心，拟办意见是指：收文单位文秘部门对所对收到的文件提出的宋负责人审批'
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-bar
  background-color #fff
  padding 12px 10px 0
  font-size 14px
  .tit
    margin-bottom 12px
</style>
