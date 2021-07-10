<template>
  <main class="error-main">
    <div class="cont">
      <h1 class="olive__logo">
        <a href="/" class="olive__link"><span class="visually-hidden">올리브영 로고</span></a>
      </h1>
      <article class="error__article" :class="`error__article--${errorType}`">
        <div class="error__txt">
          <h2 class="error__title" v-html="errorData[errorType].mainTit"></h2>
          <p class="error__msg" v-html="errorData[errorType].subTxt"></p>
        </div>
      </article>
      <div class="btn__group" :class="{'btn__group--column': isMobile, 'btn__group--row': !isMobile}">
        <a href="/" class="btn btn__size--lg btn__bg--primary">메인 페이지</a>
        <a href="" class="btn btn__size--lg btn__bg--darkgray" @click.prevent="goBack">이전 페이지</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      errorData: {
        notFound: {
          mainTit: '서비스 이용에 불편을 드려 죄송합니다.<br>고객님이 요청하신 페이지를 찾을 수 없습니다.',
          subTxt: '주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br>입력하신 주소가 정확한지 다시 한번 확인해주세요.'
        },
        serviceError: {
          mainTit: '서비스 이용에 불편을 드려 죄송합니다.',
          subTxt: '현재 접속량이 많아 연결이 지연되고 있습니다.<br>잠시 후 다시 이용해 주시기 바랍니다.'
        }
      }
    }
  },
  computed: {
    errorType: function () {
      const code = Number(this.$route.params.code)
      if (code === 404) {
        return 'notFound'
      } else {
        return 'serviceError'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/helpers';
  .error-main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    .cont {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .olive__logo {
      width: 70%;
      max-width: 248px;
      margin: 0 auto 40px;
    }
    .olive__link {
      display: block;
      &:before {
        display: block;
        background: url('~@/assets/images/common/logo.png') center center / 95% no-repeat;
        padding-bottom: 16.93548%;
        content: "";
      }
    }
    .btn__group {
      margin-top: 40px;
    }
  }
  .error__article {
    &:before {
      display: block;
      padding-bottom: 64.3097643%;
      background: url('~@/assets/images/error/error_temporary.gif') center center / cover no-repeat;
      content: "";
    }
  }
  .error__txt {
    margin-top: 30px;
    text-align: center;
  }
  .error__title {
    font-weight: 700;
    font-size: 18px;
    color: #333;
    line-height: 1.4;
  }
  .error__msg {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
  }
  @media screen and (min-width: 1020px) {
    .error-main {
      .cont {
        width: 100%;
        max-width: 1020px;
        margin: 0 auto;
      }
      .olive__logo {
        margin-bottom: 60px;
      }
      .btn__group {
        margin-top: 100px;
      }
    }
    .error__article {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      &:before {
        flex: 0 0 auto;
        width: 297px;
        padding-bottom: 191px;
      }
    }
    .error__txt {
      margin: 0;
      text-align: left;
    }
    .error__title {
      font-size: 22px;
    }
    .error__msg {
      font-size: 16px;
    }
  }
</style>
