<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view />
    <bottom-bar v-if="getIfBottom" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BottomBar from '@/components/common/BottomBar'

export default {
  components: {
    BottomBar
  },
  computed: {
    ...mapGetters([
      'getIfBottom'
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
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  padding-bottom 56px
  color #333333
  font-weight 500
button, input, textarea
  outline none
.with-top
  padding-top 44px
</style>
