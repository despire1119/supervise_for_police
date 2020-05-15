<template>
  <div class="home">
    <Banner />
    <Toast />
    <Contain />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/common/Banner'
import Toast from '@/components/common/Toast'
import Contain from '@/components/common/Contain'

export default {
  name: 'Home',
  components: {
    Banner,
    Toast,
    Contain
  }
}
</script>
