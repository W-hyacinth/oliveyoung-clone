<template>
  <article class="main-banner__article">
    <swiper :options="swiperOption" :key="swiperOption.loop" v-if="isLoading">
      <swiper-slide
        v-for="(item, index) in bannerList"
        :key="index">
        <MainBannerItem
          :bannerLink="bannerList[index].bannerUrl"
          :bannerImage="`${require(`@/assets/images/banner/${bannerList[index].bannerImage}`)}`"
          :bannerDesc="bannerList[index].bannerDesc"
          :bannerDescColor="bannerList[index].bannerDescColor"
          :aria-label="bannerList[index].bannerName" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button type="button" class="main-banner__btn" aria-label="메인배너 전체보기" @click="isMainBannerModalClose = 'false'">
      <IconPlus size="20" stroke="1" color="#fff" />
    </button>
    <PopupLayout
      class="main-banner__modal"
      :modalId="'modalMainBanner'"
      :modalName="mainBannerModalName"
      :isModalClose="isMainBannerModalClose"
      @modalClose="isModalClose">
      <MainBannerItem
        v-for="(item, index) in bannerList"
        :key="index"
        :bannerLink="bannerList[index].bannerUrl"
        :bannerImage="`${require(`@/assets/images/banner/${bannerList[index].bannerImage}`)}`"
        :bannerDesc="bannerList[index].bannerDesc"
        :bannerDescColor="bannerList[index].bannerDescColor"
        :aria-label="bannerList[index].bannerName" />
    </PopupLayout>
  </article>
</template>

<script>
import axios from 'axios'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import MainBannerItem from '@/components/MainBannerItem'
import PopupLayout from '@/components/layout/PopupLayout'
import IconPlus from '@/components/icon/IconPlus'

export default {
  name: 'MainBanner',
  data () {
    return {
      bannerList: [],
      isMainBannerModalClose: 'true',
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        on: {
        }
      }
    }
  },
  methods: {
    fetchBannerData: async function () {
      try {
        const response = await axios.get('/static/js/mainBanner.json')
        const responseStatus = response.data.length > 0
        this.$emit('mainBannerLoading', responseStatus)

        this.bannerList = response.data
        this.isLoading = true
      } catch (error) {
      }
    },
    isModalClose: function (val) {
      this.isMainBannerModalClose = val
    }
  },
  computed: {
    isShowBanner: function () {
      return this.bannerList.length > 0 && this.isLoading
    },
    mainBannerModalName: function () {
      return `전체보기 (${this.bannerList.length})`
    }
  },
  created () {
    this.fetchBannerData()
  },
  mounted () {
  },
  components: {
    swiper,
    swiperSlide,
    MainBannerItem,
    PopupLayout,
    IconPlus
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  /deep/ .main-banner__title {
    margin-left: -4%;
  }
  /deep/ .main-banner__sub-txt {
    margin-left: -6%;
  }
  &-active {
    /deep/ .main-banner__title {
      margin-left: 0;
      transition: margin 0.8s;
    }
    /deep/ .main-banner__sub-txt {
      margin-left: 0;
      transition: margin 1.5s;
    }
  }
}
.swiper-pagination {
  position: absolute;
  left: auto;
  right: calc(6.5% + 32px);
  bottom: 5.26315%;
  width: auto;
  padding: 3px 10px;
  font-size: 0.8em;
  color: #fff;
  line-height: 20px;
  border-radius: 40px;
  vertical-align: top;
  background-color: rgba(0,0,0,0.5);
}
.main-banner__article {
  position: relative;
  padding-bottom: 76%;
}
.main-banner__btn {
  position: absolute;
  right: 6.5%;
  bottom: 5.26315%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}
.main-banner__modal {
  .main-banner__link {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }
}
</style>
