<template>
    <div>
        <h1>회원가입 페이지</h1>
        <form @submit.prevent="fnRegisterUser">
            <label class="emailLabel" for="">Email : </label>
            <input type="text" v-model="sEmail"> <br><br>

            <label for="">Password : </label>
            <input type="Password" v-model="sPassword"> <br><br>
            <button>회원가입</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sEmail : '',
            sPassword : '',
        }
    },
    methods : {
        fnRegisterUser() {
            this.$store.dispatch('fnRegisterUser', {
                pEmail : this.sEmail,
                pPassword : this.sPassword,
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