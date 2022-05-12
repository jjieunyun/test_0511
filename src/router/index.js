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
🍎네비게이션가드
🌳main에 접근했을 때 로그인이 되어있다면? main페이지로 이동 : login페이지로 이동
🌳라우트 메타필드를 확인해서 main페이지에 접근할것을 확인할 수있다.
*/

router.beforeEach((to, from, next) => {
  //이동할 위치(to-라우터객체-$router/router)가 메인인지 확인
  const bNeedAuth = to.matched.some((recoard) => recoard.meta.bAuth);
  //로그인이 되어있는지 확인 : firebase인증 필요함
  const bCheckAuth = auth.currentUser;


  //main페이지이면서  로그인이 되어있지 않다면? login page로 이동 : 다른페이지로 이동  
  //로그인이 되어있으면서 main로 이동? 그대로 이동
  if(bNeedAuth && !bCheckAuth) {
    next('/')
  } else {
    next();
  }

})


export default router
