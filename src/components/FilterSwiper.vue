<template>
  <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
    <swiper-slide role="tab" tabindex="0">111111</swiper-slide>
    <swiper-slide role="tab" tabindex="0">222222</swiper-slide>
    <swiper-slide role="tab" tabindex="0">333333</swiper-slide>
    <swiper-slide role="tab" tabindex="0">444444</swiper-slide>
    <swiper-slide role="tab" tabindex="0">555555</swiper-slide>
    <swiper-slide role="tab" tabindex="0">666666</swiper-slide>
    <swiper-slide role="tab" tabindex="0">777777</swiper-slide>
    <swiper-slide role="tab" tabindex="0">101010101010</swiper-slide>
    <swiper-slide role="tab" tabindex="0">111111111111</swiper-slide>
    <swiper-slide role="tab" tabindex="0">121212121212</swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'FilterSwiper',
  data () {
    const _vm = this
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 6,
        slidesOffsetBefore: 0, // offset Before과 After는 부분적으로 필요할 때 사용
        slidesOffsetAfter: 0,
        freeMode: true,
        // slideToClickedSlide: true,
        centerInsufficientSlides: true, // 이 옵션을 사용하면 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        on: {
          click: function () {
            _vm.slideMoveTo()
            _vm.activeTab()
          },
          tap: function () {
            _vm.slideMoveTo()
            _vm.activeTab()
          },
          resize: function () {
            this.allowTouchMove = !_vm.isOverview
          }
        }
      }
    }
  },
  methods: {
    swiperInit: function () {
      this.swiper.allowTouchMove = !this.isOverview
      this.activeTab()
    },
    slideMoveTo: function (swiper = this.swiper) {
      if (!swiper.clickedSlide) return
      const activeIndex = swiper.clickedIndex
      swiper.slideTo(activeIndex)
    },
    activeTab: function (swiper = this.swiper) {
      if (swiper.hasOwnProperty('clickedSlide') && !swiper.clickedSlide) return
      const slideSelector = `.${swiper.params.slideClass}`
      const selectedEl = swiper.clickedSlide || swiper.slides[swiper.params.initialSlide]
      const swiperArr = document.querySelectorAll(slideSelector)
      Array.from(swiperArr).forEach((el) => {
        el.setAttribute('aria-selected', 'false')
        selectedEl.setAttribute('aria-selected', 'true')
      })
    }
  },
  computed: {
    swiper: function () {
      return this.$refs.filterSwiper.swiper
    },
    isOverview: function () {
      return window.innerWidth >= this.swiper.virtualSize
    }
  },
  created () {
  },
  mounted () {
    this.swiperInit()
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  padding: 0 20px;
  &:before,
  &:after {
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 10;
    content: "";
    pointer-events: none;
  }
  &:before {
    left: 0;
    background: linear-gradient(90deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
  &:after {
    right: 0;
    background: linear-gradient(270deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
  .swiper-wrapper {
    .swiper-slide {
      width: auto;
      min-width: 56px;
      padding: 0px 14px;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
      color: #84868c;
      border: 0;
      border-radius: 18px;
      background: #f3f4f7;
      appearance: none;
      cursor: pointer;
      &[aria-selected="true"] {
        color: #fff;
        background: #000;
      }
    }
  }
}
</style>
