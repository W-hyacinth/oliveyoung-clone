<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'reset-css'
import './assets/scss/common.scss'
import './CommonMixin'
export default {
  name: 'App',
  metaInfo: {
    title: '[클론코딩] 올리브영 온라인몰',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: '올리브영 온라인 몰을 기반으로 Vuejs 프레임워크를 활용해 클론코딩한 포트폴리오 사이트입니다.'},
      {property: 'og:title', content: '[클론코딩] 올리브영 온라인몰'},
      {property: 'og:description', name: 'og:description', content: '올리브영 온라인 몰을 기반으로 Vuejs 프레임워크를 활용해 클론코딩한 포트폴리오 사이트입니다.'},
      {property: 'og:url', content: window.location.href},
      {property: 'og:site_name', content: '[클론코딩] 올리브영 온라인몰'},
      {property: 'og:type', content: 'website'}
    ],
    link: [
      {rel: 'canonical', href: window.location.href}
    ]
  },
  components: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
