<template>
    <div>
        <h1>메인페이지</h1>
        <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" alt="profile IMG">
        <div v-else class="logo"><h6>{{fnGetUserfirstChar}}</h6></div>
        <h3>{{fnGetUserName[0]}}</h3>
        <p>{{fnGetUser.email}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getEmail : this.$store.getters.fnGetUser.email
        }
    },
    computed : {
        fnGetUser() {
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        },
        fnGetUserName() {
            let email = this.getEmail
            let splitedEmail = email.split('@');
            return  splitedEmail
        },
        fnGetUserfirstChar() {
            let email = this.getEmail
            let splitedEmail = email.split('@');
            let string = splitedEmail.toString()
            return  string.charAt(0)
        },
        
    }
}
</script>

<style scoped>
html {
    font-size: 100px;
}

.logo {
    width: 100px;
    height: 100px;
    background-color: rgb(141,110,99);
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

}

.logo > h6 {
    color: white;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    font-size:3.5em;

}

img {
    border-radius: 50%;
}

</style>