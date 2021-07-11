import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      isLogin: false,
      isMobile: null
    }
  },
  methods: {
    checkMobile: function () {
      this.isMobile = (window.innerWidth < 1020)
    },
    commingSoon: function () {
      alert('서비스 준비중입니다.')
    },
    goBack: function () {
      this.$router.go(-1)
    },
    handleResize: function () {
      this.$nextTick(() => {
        this.checkMobile()
      })
    }
  },
  watch: {
  },
  created () {
    this.checkMobile()
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
})
