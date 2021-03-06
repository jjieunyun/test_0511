import Vue from 'vue';
import VueRouter from 'vue-router';
import '@/datasources/firebase'

import { getAuth } from 'firebase/auth'
const auth = getAuth();


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
    },
    meta : {bAuth : true},
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
/*
๐๋ค๋น๊ฒ์ด์๊ฐ๋
๐ณmain์ ์ ๊ทผํ์ ๋ ๋ก๊ทธ์ธ์ด ๋์ด์๋ค๋ฉด? mainํ์ด์ง๋ก ์ด๋ : loginํ์ด์ง๋ก ์ด๋
๐ณ๋ผ์ฐํธ ๋ฉํํ๋๋ฅผ ํ์ธํด์ mainํ์ด์ง์ ์ ๊ทผํ ๊ฒ์ ํ์ธํ  ์์๋ค.
*/

router.beforeEach((to, from, next) => {
  //์ด๋ํ  ์์น(to-๋ผ์ฐํฐ๊ฐ์ฒด-$router/router)๊ฐ ๋ฉ์ธ์ธ์ง ํ์ธ
  const bNeedAuth = to.matched.some((recoard) => recoard.meta.bAuth);
  //๋ก๊ทธ์ธ์ด ๋์ด์๋์ง ํ์ธ : firebase์ธ์ฆ ํ์ํจ
  const bCheckAuth = auth.currentUser;


  //mainํ์ด์ง์ด๋ฉด์  ๋ก๊ทธ์ธ์ด ๋์ด์์ง ์๋ค๋ฉด? login page๋ก ์ด๋ : ๋ค๋ฅธํ์ด์ง๋ก ์ด๋  
  //๋ก๊ทธ์ธ์ด ๋์ด์์ผ๋ฉด์ main๋ก ์ด๋? ๊ทธ๋๋ก ์ด๋
  if(bNeedAuth && !bCheckAuth) {
    next('/')
  } else {
    next();
  }

})


export default router
