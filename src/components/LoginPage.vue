<template>
    <div>
        <h1>로그인 페이지</h1>
        <form @submit.prevent="fnDoLogin">
            <label class="emailLabel" for="">Email : </label>
            <input type="text" v-model="sEmail"> <br><br>
            <label for="">Password : </label>
            <input type="Password" v-model="sPassword"> <br><br>
            <input class="btn" type="submit" value="로그인" ><br>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sEmail : '',
            sPassword : ''
        }
    },
    methods : {
        fnDoLogin() {
            this.$store.dispatch('fnDoLogin', {
                pEmail : this.sEmail,
                pPassword : this.sPassword
            })
        }
    }
}
</script>

<style scoped>
.btn {
    margin: 5px;
    background-color: transparent;
    border: 1px solid lightslategray;
    border-radius: 3px;
    padding: 3px 5px;
}

.emailLabel {
    margin: 14px;
}
</style>