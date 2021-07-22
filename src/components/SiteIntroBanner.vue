<template>
  <article v-if="!isNoticeBannerHide" class="notice-banner">
    <p class="notice-banner__txt">
      이 사이트는 <a href="https://m.oliveyoung.co.kr/m/main/main.do#0" class="notice-banner__link notice-banner__link--highlight" target="_blank" rel="noopener noreferrer">올리브영</a>을 Vuejs 프레임워크를 활용하여 클론코딩한 포트폴리오 사이트입니다.
    </p>
    <button
      type="button"
      class="notice-banner__btn notice-banner__btn--close"
      aria-label="포트폴리오 안내 배너 닫기"
      @click="bannerClose(true)">
      <IconClose />
    </button>
  </article>
</template>

<script>
import IconClose from '@/components/icon/IconClose'
export default {
  name: 'SiteIntroBanner',
  data () {
    return {
      isNoticeBannerHide: false
    }
  },
  methods: {
    bannerClose: function (val) {
      this.isNoticeBannerHide = val
    }
  },
  components: {
    IconClose
  }
}
</script>

<style lang="scss" scoped>
.notice-banner {
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: 150px;
  right: 20px;
  max-width: 180px;
  padding: 8px;
  background-color: #fff;
  border: 3px solid #9bce26;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  animation: updown 0.8s infinite alternate;
  z-index: 10;
}
@keyframes updown {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-8px)
  }
}
.notice-banner__txt {
  font-size: 14px;
  line-height: 1.4;
  word-break: keep-all;
  word-wrap: break-word;
}
.notice-banner__btn {
  align-self: flex-end;
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
.notice-banner__link {
  color: #000;
  &--highlight {
    font-weight: 700;
    color: #9bce26;
  }
}
</style>
