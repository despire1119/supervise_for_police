<template>
  <div class="banner">
    <swiper ref="mySwiper" style="height: 100%" :options="options">
      <swiper-slide><img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590958930514&di=ceee7d33eef09a3d4b8bb6fecf2061f0&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F32%2F483%2F811.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590958868916&di=83759fe88cfe7fbf0936132593cf28b6&imgtype=0&src=http%3A%2F%2Fimagepphcloud.thepaper.cn%2Fpph%2Fimage%2F69%2F155%2F11.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=200304002,1834527237&fm=26&gp=0.jpg" alt="" class="img"></swiper-slide>
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
