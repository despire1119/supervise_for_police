<template>
  <ul class="contain">
    <li v-for="(item, index) in containList" :key="index">
      <div class="icon"><img :src="item.imgUrl" :alt="item.tit"></div>
      <p class="tit">{{ item.tit }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      containList: []
    }
  },
  created() {
    this.getContainList()
  },
  methods: {
    async getContainList() {
      const res = await this.axios.get('/contain_list')
      this.containList = res.data
    }
  }
}
</script>

<style lang="stylus" scoped>
.contain
  display flex
  justify-content space-around
  flex-wrap wrap
  font-size 13px
  color #4A4A4A
  li
    padding-top 16px
    width 93.75px
    border-bottom 1px solid #E5E5E5
    .icon
      display flex
      align-items center
      justify-content center
      height 32px
      img
        width auto
        height 100%
    .tit
      margin-top 10px
      margin-bottom 16px
</style>
