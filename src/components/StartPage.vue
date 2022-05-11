<template>
    <div>
        <h1>시작페이지</h1>
        <button @click="fnGoogleLogin_Popup">
            <span style=" color:red; font-weight: bold ">Google</span>
            로그인</button> <br>
        <button @click="fnLoginEmail">
            <span style=" color:blue; font-weight: bold ">E-mail</span>
            로그인</button>
    </div>
</template>

<script>
export default {
    methods : {
        fnGoogleLogin_Popup() {
            this.$store.dispatch('fnGoogleLogin_Popup')
        },
        fnLoginEmail() {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>