import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters[(
      'getIfBottom',
      'getMyCases'
    )]
  },
  mounted() {
    this.$store.commit('setIfBottom', this.$route)
    console.log(this.$store.getters.getIfBottom)
  }
}
