<template>
  <section class="bottom-bar">
    <div v-for="(item, index) in getBottomBar" :key="index" class="item" :class="{ 'active': item.active }" @click="chooseItem(index)">
      <div class="img-container">
        <img :src="item.active ? item.urlActive : item.url" alt="">
      </div>
      <p class="tit">{{ item.tit }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getBottomBar'
    ])
  },
  methods: {
    chooseItem(i) {
      this.$store.commit('setBottomBarList', i)
      switch (i) {
        case 0:
          this.$router.push({ name: 'Home' })
          break
        case 1:
          this.$router.push({ name: 'Charts' })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-bar
  position fixed
  justify-content space-around
  align-items center
  bottom 0
  left 0
  right 0
  display flex
  height 56px
  font-weight 500
  background-color #fff
  box-shadow:0px -2px 5px 0px rgba(0,0,0,0.07)
  z-index 999999
  .item
    flex 1
    transition all .3s ease-in-out
    text-align center
    margin 0 25px
    .img-container
      display flex
      justify-content center
      align-items center
      margin auto
      width 21px
      height 21px
      img
        width 100%
    .tit
      margin-top 4px
      font-size 11px
      color #4a4a4a
  .active
    .tit
      color #4285F4
</style>
