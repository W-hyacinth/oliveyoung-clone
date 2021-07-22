import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/main'
    // },
    {
      path: '/',
      name: 'Main',
      component: () => import('@/views/Main')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/comingSoon',
      name: 'ComingSoon',
      component: () => import('@/views/ComingSoon')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/:code',
      name: 'Error',
      component: () => import('@/views/Error')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/Search')
    },
    // {
    //   path: '/search/result',
    //   name: 'SearchResult',
    //   props: (route) => ({ query: route.query.q }),
    //   component: () => import('@/views/SearchResult')
    // },
    {
      path: '/ranking',
      name: 'Ranking',
      component: () => import('@/views/Ranking')
    },
    {
      path: '/newarrival',
      name: 'NewArrival',
      component: () => import('@/views/NewArrival')
    }
  ]
})
