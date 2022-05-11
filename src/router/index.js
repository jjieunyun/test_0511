import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'StartPage',
    component: function () {
      return import('../components/StartPage.vue')
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: function () {
      return import('../components/RegisterPage.vue')
    }
  },
  {
    path: '/main',
    name: 'MainPage',
    component: function () {
      return import('../components/MainPage.vue')
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: function () {
      return import('../components/LoginPage.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
