<template>
  <div id="wrap">
    <section class="header__section">
      <HeaderBanner v-if="isHeaderBannerDisplay" @showBanner="isHeaderBannerShow" />
      <Header />
      <Menu />
    </section>
    <main id="main" class="main">
      <slot name="default"></slot>
    </main>
    <Footer />
    <SiteIntroBanner ref="SiteIntroBanner" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import HeaderBanner from '@/components/HeaderBanner'
import SiteIntroBanner from '@/components/SiteIntroBanner'
export default {
  name: 'AppLayout',
  data () {
    return {
      isHeaderBannerDisplay: true
    }
  },
  methods: {
    isHeaderBannerShow: function (val) {
      this.isHeaderBannerDisplay = val
    }
  },
  created () {
    this.isHeaderBannerDisplay = this.getCookie('headerBanner') !== 'false'
  },
  components: {
    Header,
    Footer,
    Menu,
    HeaderBanner,
    SiteIntroBanner
  }
}
</script>

<style lang="scss" scoped>
#wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1 1 auto;
}
</style>
