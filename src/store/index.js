import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';

import '@/datasources/firebase.js';

import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, deleteUser  
} from "firebase/auth";

const auth = getAuth();
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oUser : null
  },
  getters: {
    //1. 사용자 객체
    fnGetUser(state) {
      return state.oUser;
    },
    //2.로그인 여부 
    fnGetAuthSatus(state) {
      return state.oUser != null;
    }
  },
  mutations: {
    //작성한 User의 정보를 받아와서 할당
    fnSetUser(state, payload) {
      state.oUser = payload
    }
  },
  actions: {
    //1. 회원가입페이지 : 이메일회원 생성 및 저장 
    fnRegisterUser({commit}, payload) {
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo) => {
        commit('fnSetUser', {
          email : pUserInfo.user.email,
          name : pUserInfo.user.name,
          photoURL : pUserInfo.user.photoURL
        });
        router.push('/main');
      })
      .catch(error=> console.log(error.message));
    },

    //2. 이메일회원 로그인
    fnDoLogin({commit}, payload) {
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword, payload.pName)
        .then((pUserInfo) => {
          commit('fnSetUser', {
            id : pUserInfo.user.uid,
            name : pUserInfo.user.name,
            email : pUserInfo.user.email,
            photoURL : pUserInfo.user.photoURL
          })
          router.push('/main');
        })
        .catch(error=> console.log(error.message));
    },

    //3. 구글인증 
    fnGoogleLogin_Popup({commit}) {
      const oProvider = new GoogleAuthProvider();
      oProvider.addScope('profile');
      oProvider.addScope('email');

      signInWithPopup(auth, oProvider)
        .then((pUserInfo) =>{
          commit('fnSetUser', {
            id: pUserInfo.user.uid,
            name: pUserInfo.user.displayName,
            email: pUserInfo.user.email,
            photoURL: pUserInfo.user.photoURL
          });
          console.log(pUserInfo.user.photoURL)
          router.push('/main');
        })
        .catch(error=> {
          console.log(error.name);
          console.log(error.message)
        });
    },

    //4. 로그아웃
    fnDoLogout({ commit }) {
      commit("fnSetUser", null);
      router.push("/");
    },

    //5. 회원삭제
    fnDeleteUser({commit}) {
      const user = auth.currentUser;
      deleteUser(user)
      .then(()=> {
        commit('fnSetUser', null);
        router.push('/')
      })
      .catch((error) => console.log(error.message))
    }
  },
  modules: {
  }
})
