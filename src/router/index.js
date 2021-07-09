import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/Main')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/:code',
      name: 'Error',
      component: () => import('@/views/Error')
    }
  ]
})
