<template>
  <swiper ref="mainBannerSwiper" :options="swiperOption">
    <swiper-slide>
    </swiper-slide>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'MainBanner',
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>

</style>
