<template>
  <div id="app" :class="{'with-top': getIfTop,'need-white': !getIfBottom}">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <nav-bar v-if="getIfTop" :tit="getCurrentTitle" />
    <router-view />
    <bottom-bar v-if="getIfBottom" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/common/NavBar'
import BottomBar from '@/components/common/BottomBar'

export default {
  components: {
    NavBar,
    BottomBar
  },
  computed: {
    ...mapGetters([
      'getIfTop',
      'getIfBottom',
      'getIfWhite',
      'getCurrentTitle'
    ])
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      const res = await this.axios.post('/login', null)
      console.log(res)
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family webfont
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  padding-bottom 56px
  color #333333
  font-weight 500
.with-top
  padding-top 44px
.need-white
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  overflow-y auto
  background-color #fff
</style>
