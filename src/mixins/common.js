import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters[(
      'getIfBottom',
      'getMyCases'
    )]
  },
  created() {
    this.$store.commit('setCurrentRoute', this.$route)
  }
}
