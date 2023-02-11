<template>
    <v-card>
        <h1>Soy un login</h1>
        <v-btn @click="login">LogIn</v-btn>
        <v-btn @click="logout">LogOut</v-btn>
    </v-card>
</template>

<script>
export default {
    components: {

    },
    data () {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        login () {
            this.isLoggedIn = true
            localStorage.setItem('isLoggedIn', true)
            this.$router.push('/')
        },
        logout () {
            this.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
        }
    }
}
</script>