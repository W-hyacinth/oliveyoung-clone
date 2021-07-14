<template>
  <article class="header-banner">
    <a :href="oliveAppLink" class="header-banner__link" target="_blank" rel="noopener noreferrer">
      <span class="header-banner__msg">APP 첫구매 <strong class="header-banner__msg--highlight">5천원 할인 쿠폰과 추가혜택! </strong>받기</span>
    </a>
    <button type="button" class="header-banner__btn" aria-label="배너 오늘 하루 닫기" @click="closeBanner">
      <IconClose color="#fff" title="닫기 아이콘" />
    </button>
  </article>
</template>

<script>
import IconClose from '@/components/IconClose'
export default {
  name: 'HeaderBanner',
  methods: {
    closeBanner: function () {
      const checkCloseBanner = confirm('오늘 하루 배너를 보지 않겠습니다.')
      if (checkCloseBanner) {
        this.setCookie('headerBanner', false, 1)
        this.$emit('showBanner', false)
      }
    }
  },
  computed: {
    oliveAppLink: function () {
      if (this.mobileDevice === 'ios') {
        return 'https://apps.apple.com/kr/app/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81/id873779010'
      } else if (this.mobileDevice === 'android') {
        return 'https://play.google.com/store/apps/details?id=com.oliveyoung&hl=ko&gl=US'
      }
    }
  },
  components: {
    IconClose
  }
}
</script>

<style lang="scss" scoped>
.header-banner {
  display: flex;
  background-color: #676b7e;
}
.header-banner__link {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 14px;
  word-break: keep-all;
  word-wrap: break-word;
  &:before {
    display: block;
    width: 42px;
    height: 42px;
    margin-right: 6px;
    background: url('~@/assets/images/common/ico_app.png') center center / 32px no-repeat;
    content: "";
  }
}
.header-banner__msg {
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: -0.5px;
  line-height: 20px;
  &--highlight {
    display: inline;
    color: #ffff00;
  }
}
.header-banner__btn {
  flex: 0 0 auto;
  width: 48px;
  background-color: #5e6174;
  cursor: pointer;
}
</style>
