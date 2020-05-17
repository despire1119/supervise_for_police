<template>
  <div class="toast-box">
    <div class="toast">
      <div class="tip">
        <p>通知</p>
        <p>公告</p>
      </div>
      <ul class="tips-content">
        <li>
          <i class="icon-origin" />
          <span>按照公务员主管部门同意部署公安机关面向社招公告</span>
          <i class="icon-right" />
        </li>
        <li>
          <i class="icon-origin" />
          <span>按照公务员主管部门同意部署公安机关面向社招公告</span>
          <i class="icon-right" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getToasts()
  },
  methods: {
    async getToasts() {
      const res = await this.axios.get('/toasts')
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
.toast-box
  display flex
  margin-top 10px
  justify-content center
  .toast
    display flex
    align-items center
    width 355px
    height 54px
    border-radius 4px
    box-shadow:0px 0px 3px 0px rgba(0,0,0,0.16)
    .tip
      margin-left 8px
      height 40px
      padding 4px
      font-size 11px
      font-weight 500
      color #FF8D00
      line-height 16px
      border 1px solid #FF8D00
      border-radius 4px
    .tips-content
      font-size 11px
      color #4A4A4A
      margin-left 9px
      li
        display flex
        align-items center
        line-height 12px
        &:not(:last-child)
          margin-bottom 8px
        .icon-origin
          margin-right 11px
          width 4px
          height 4px
          border-radius 2px
          background-color #4A4A4A
        .icon-right
          margin-left 8px
          width 10px
          height 5px
          background-repeat no-repeat
          background-size contain
          background-position center
          background-image url('~@/assets/images/up@3x.png')
          transform rotate(-90deg)
          img
            width 100%
            height 100%
        span
          display block
          width 264px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
</style>
