<template>
  <AppLayout>
    <MainBanner v-if="isMainBannerLoading" @mainBannerLoading="bannerLoadStatus" />
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import MainBanner from '@/components/MainBanner'

export default {
  name: 'Main',
  data () {
    return {
      isMainBannerLoading: true
    }
  },
  methods: {
    bannerLoadStatus: function (val) {
      this.isMainBannerLoading = val
    }
  },
  components: {
    AppLayout,
    MainBanner
  }
}
</script>

<style lang="scss" scoped>
.sample {
  padding: 40px 0;
}
</style>
