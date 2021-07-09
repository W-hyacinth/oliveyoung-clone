import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/views/Main'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/views/Main')
    }
  ]
})
