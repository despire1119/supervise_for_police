import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters[(
      'getIfBottom',
      'getMyCases'
    )]
  },
  mounted() {
    this.$store.commit('setIfTop', this.$route)
    this.$store.commit('setIfBottom', this.$route)
    this.$store.commit('setCurrentTitle', this.$route)
  }
}
