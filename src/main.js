// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const SingleApp = () => import('@/SingleApp')
const singleAppArr = ['error', 'login']
const isSinglePage = singleAppArr.filter(el => window.location.href.includes(el)).length

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  components: (function () {
    if (isSinglePage) {
      return { App: SingleApp }
    } else {
      return { App }
    }
  })(),
  template: '<App/>'
})
