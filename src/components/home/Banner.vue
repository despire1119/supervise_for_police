<template>
  <div class="banner">
    <swiper ref="mySwiper" style="height: 100%" :options="options">
      <swiper-slide><img class="img" :src="require('@/assets/images/banner/timg.jpeg')" alt=""></swiper-slide>
      <swiper-slide><img class="img" :src="require('@/assets/images/banner/timg_1.jpeg')" alt=""></swiper-slide>
      <swiper-slide><img class="img" :src="require('@/assets/images/banner/timg_2.jpg')" alt=""></swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      options: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  height 200px
  background-color #ddd
.swiper-container
  --swiper-theme-color: #fff;
  --swiper-pagination-color: #fff;/* 两种都可以 */
.img
  width 100%
  height 100%
</style>
