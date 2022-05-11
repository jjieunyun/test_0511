<template>
  <div id="app">
    <nav v-if="!fnGetAuthSatus">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">회원가입</router-link>
    </nav>
    <nav v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/main">Main</router-link> <br><br>
      <button @click="fnDoLogout">로그아웃</button>
      <button @click="fnDeleteUser">회원탈퇴</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed : {
    fnGetAuthSatus() {
      return this.$store.getters.fnGetAuthSatus
    },
  },
  methods : {
     fnDoLogout() {
      this.$store.dispatch('fnDoLogout')
    },
    fnDeleteUser(){
      this.$store.dispatch('fnDeleteUser')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
    margin: 5px;
    background-color: transparent;
    border: 1px solid lightslategray;
    border-radius: 3px;
    padding: 3px 5px;
    
}
</style>
