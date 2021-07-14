import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      isLogin: false,
      isMobile: null
    }
  },
  methods: {
    checkMobileResolution: function () {
      this.isMobile = (window.innerWidth < 1020)
    },
    commingSoon: function () {
      alert('서비스 준비중입니다.')
    },
    goBack: function () {
      this.$router.go(-1)
    },
    setCookie: function (name, value, period) {
      let date = new Date()
      date.setDate(date.getDate() + period)
      document.cookie = `${name}=${value};Expires=${date.toUTCString()}`
    },
    getCookie: function (name) {
      const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)
      return value ? value[2] : null
    },
    delCookie: function (name) {
      let date = new Date()
      date.setDate(date.getDate() - 100)
      document.cookie = `${name}=;Expires=${date.toUTCString()}`
    },
    handleResize: function () {
      this.$nextTick(() => {
        this.checkMobileResolution()
      })
    }
  },
  computed: {
    mobileDevice: function () {
      const ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('android') > -1) {
        return 'android'
      } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1) {
        return 'ios'
      } else {
        return 'other'
      }
    }
  },
  watch: {
  },
  created () {
    this.checkMobileResolution()
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
})
