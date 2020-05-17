<template>
  <div class="home">
    <Banner />
    <Toast />
    <Contain />
    <fix-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home/Banner'
import Toast from '@/components/home/Toast'
import Contain from '@/components/home/Contain'
import FixBar from '@/components/home/FixBar'

export default {
  name: 'Home',
  components: {
    Banner,
    Toast,
    Contain,
    FixBar
  }
}
</script>
