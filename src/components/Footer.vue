<template>
  <footer class="footer">
    <article class="footer__article footer-login">
      <div class="conts">
        <div class="footer-login__menu">
          <a :href="loginBtnUrl" class="footer-login__link">{{ loginBtnTxt }}</a>
          <a href="" class="footer-login__link" @click.prevent="commingSoon">PC버전보기</a>
          <a href="" class="footer-login__link" @click.prevent="commingSoon">고객센터</a>
        </div>
      </div>
    </article>
    <!-- <article class="footer__article footer-corp">
      <div class="conts">
        <ul class="footer-corp__menu">
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">회사소개</a></li>
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">채용안내</a></li>
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">가맹점 개설문의</a></li>
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">상품입점 및 제휴문의</a></li>
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">사이버 감사실</a></li>
          <li class="footer-corp__list"><a href="" class="footer-corp__link" @click.prevent="commingSoon">고객센터</a></li>
        </ul>
        <div class="footer-family">
          <button type="button" aria-label="CJ그룹 계열사" class="footer-family__btn">CJ그룹 계열사 바로가기</button>
          <div class="footer-family__menu">

          </div>
        </div>
      </div>
    </article> -->
    <article class="footer__article footer-info">
      <div class="conts">
        <button
          type="button"
          id="footer-info__btn"
          class="footer-info__btn"
          aria-expanded="false"
          aria-controls="footer-info__area"
          @click="btnToggleEvent('.footer-info__btn', '.footer-info__area')">씨제이올리브영(주) 사업자정보</button>
        <div
          id="footer-info__area"
          class="footer-info__area"
          role="contentinfo"
          aria-labelledby="footer-info__btn"
          aria-hidden="true">
          <address class="footer-info__address">
            <span class="footer-info__item footer-info__item--inline">
              대표이사 : 구창근
            </span>
            <span class="footer-info__item footer-info__item--inline">
              사업자 등록번호 : 809-81-01574
            </span>
            <span class="footer-info__item">
              주소 : (04323) 서울특별시 용산구 한강대로 372, 24층 (동자동, KDB타워)
            </span>
            <span class="footer-info__item">
              호스팅사업자 : CJ 올리브네트웍스
            </span>
            <span class="footer-info__item">
              통신판매업신고번호 : <a href="" class="footer-info__link" @click.prevent="commingSoon">2019-서울용산-1428</a>
            </span>
            <span class="footer-info__item">
              이메일 : <a href="mailto:oliveweb@cj.net" class="footer-info__link footer-info__link--email">oliveweb@cj.net</a>
            </span>
          </address>
        </div>
      </div>
    </article>
    <article class="footer__article footer-cs">
      <div class="conts">
        <div class="footer-cs__list footer-cs__list--board">
          <a href="" @click="commingSoon" class="footer-cs__link footer-cs__link--board">고객센터</a>
        </div>
        <div class="footer-cs__list footer-cs__list--tel">
          <a href="tel:15220882" data-tel="1522-0882" class="footer-cs__tel footer-cs__tel--online">온라인몰 고객센터</a>
          <a href="tel:15774887" data-tel="1577-4887" class="footer-cs__tel footer-cs__tel--store">매장고객센터</a>
        </div>
        <div class="footer-cs__list footer-cs__list--mypage">
          <a href="" @click="commingSoon" class="footer-cs__link footer-cs__link--mypage">1:1<br>문의하기</a>
        </div>
      </div>
    </article>
    <article class="footer__article footer-sns">
      <div class="conts">
        <aside class="footer-sns__aside">
          <h2 class="footer-sns--title">올리브영 SNS 공식계정</h2>
          <div class="footer-sns--group">
            <a href="https://www.facebook.com/OLIVEYOUNG" class="footer-sns__link footer-sns__link--facebook" target="_blank" rel="noopener noreferrer">
              <span class="visually-hidden">올리브영 페이스북 새 창으로 이동</span>
            </a>
            <a href="https://www.instagram.com/oliveyoung_official/" class="footer-sns__link footer-sns__link--instagram" target="_blank" rel="noopener noreferrer">
              <span class="visually-hidden">올리브영 인스타그램 새 창으로 이동</span>
            </a>
            <a href="https://www.youtube.com/user/cjoliveyoung/" class="footer-sns__link footer-sns__link--youtube" target="_blank" rel="noopener noreferrer">
              <span class="visually-hidden">올리브영 유튜브 새 창으로 이동</span>
            </a>
            <a href="https://pf.kakao.com/_xbmwYh" class="footer-sns__link footer-sns__link--kakaotalk" target="_blank" rel="noopener noreferrer">
              <span class="visually-hidden">올리브영 카카오톡 채널 새 창으로 이동</span>
            </a>
          </div>
        </aside>
        <p class="footer-sns__copyright">&copy; 올리브영 ALL RIGHTS RESERVED</p>
      </div>
    </article>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    btnToggleEvent: function (btnSelector, targetSelector) {
      const btnEl = document.querySelector(btnSelector)
      const targetEl = document.querySelector(targetSelector)
      const isShow = targetEl.getAttribute('aria-hidden') === 'true' ? 'false' : 'true'

      btnEl.setAttribute('aria-expanded', targetEl.getAttribute('aria-hidden'))
      targetEl.setAttribute('aria-hidden', isShow)
    }
  },
  computed: {
    loginBtnTxt: function () {
      return this.isLogin ? '로그아웃' : '로그인'
    },
    loginBtnUrl: function () {
      return this.isLogin ? '/logout' : '/login'
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  @mixin clearfix() {
    &:before,
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    padding-bottom: calc(20px + env(safe-area-inset-bottom));
    background-color: #f2f2f2;
    border-top: 1px solid #9bce26;
  }
  .footer__article {
    @include clearfix();
    .conts {
      display: flex;
      flex-direction: column;
    }
  }
  .footer-login {
    background-color: #eaeaea;
  }
  .footer-login__menu {
    flex: 1 1 auto;
    display: flex;
  }
  .footer-login__link {
    flex: 1 1 auto;
    display: block;
    padding: 10px 0;
    font-weight: 700;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 20px;
    letter-spacing: -0.04em;
  }
  .footer-info__btn {
    padding: 10px 0;
    font-weight: 700;
    font-size: 14px;
    color: #333;
    line-height: 18px;
  }
  .footer-info__address {
    padding: 15px 16px;
    background-color: #eaeaea;
  }
  .footer-info__item {
    display: block;
    font-size: 12px;
    color: #333;
    line-height: 18px;
    word-break: keep-all;
    word-wrap: break-word;
    &--inline {
      display: inline-block;
    }
  }
  .footer-info__link {
    color: #333;
    &--email {
      color: #000;
    }
  }
  .footer-cs {
    padding: 15px 16px;
    border-top: 1px solid #eaeaea;
    .conts {
      flex-direction: row;
    }
  }
  .footer-cs__list {
    display: flex;
    flex-direction: column;
    padding: 0 2px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
    &--board,
    &--mypage {
      flex: 0 0 auto;
      width: 20%;
    }
    &--tel {
      flex: 1 1 auto;
      flex: 60%;
    }
  }
  .footer-cs__tel {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    font-size: 12px;
    color: #333;
    line-height: 15px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    &:before {
      display: flex;
      width: 15px;
      height: 15px;
      line-height: 20px;
      margin-right: 5px;
      background: transparent center center / contain no-repeat;
      content: ""
    }
    &:after {
      display: flex;
      flex: 0 0 auto;
      margin-left: auto;
      content: attr(data-tel);
    }
    &:nth-child(n+2) {
      margin-top: 4px;
    }
    &--online {
      &:before {
        background-image: url('~@/assets/images/common/footer/footer_onlinemall_icon.png');
      }
    }
    &--store {
      &:before {
        background-image: url('~@/assets/images/common/footer/footer_store_icon.png');
      }
    }
  }
  .footer-cs__link {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    font-size: 12px;
    color: #333;
    line-height: 1.4;
    text-align: center;
    &:before {
      display: flex;
      margin-bottom: 5px;
      background: transparent center center / contain no-repeat;
      content: "";
    }
    &--board {
      &:before {
        width: 45px;
        height: 45px;
        background-image: url('~@/assets/images/common/footer/service_center_icon.png');
      }
    }
    &--mypage {
      background-color: #fff;
      border: 1px solid #e5e5e5;
      &:before {
        width: 15px;
        height: 15px;
        background-image: url('~@/assets/images/common/footer/footer_one_icon.png');
      }
    }
  }
  .footer-sns {
    padding-top: 15px;
    margin: 0 16px;
    border-top: 1px solid #ccc;
  }
  .footer-sns__copyright {
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 18px;
  }
  .footer-sns__aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-sns--title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 14px;
    color: #666;
  }
  .footer-sns--group {
    @include clearfix();
  }
  .footer-sns__link {
    display: block;
    float: left;
    width: 42px;
    height: 42px;
    background: transparent center center / cover no-repeat;
    &:nth-of-type(n+2) {
      margin-left: 12px;
    }
    &--facebook {
      background-image: url('~@/assets/images/common/footer/ico_facebook.gif');
    }
    &--instagram {
      background-image: url('~@/assets/images/common/footer/ico_instagram.gif');
    }
    &--youtube {
      background-image: url('~@/assets/images/common/footer/ico_youtube.png');
    }
    &--kakaotalk {
      background-image: url('~@/assets/images/common/footer/ico_kakao.gif');
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .footer {
      padding-bottom: 20px;
    }
  }
</style>
