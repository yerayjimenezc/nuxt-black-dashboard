<template>
    <card>
        <h1>Soy un login</h1>
        <button class="btn btn-secundary" @click="login">LogIn</button>
        <button class="btn btn-secundary" @click="logout">LogOut</button>
        <card>
            <h1 class="card-title">Registro de usuarios</h1>
            <form>
                <label>Usuario:</label>
                <input type="text" placeholder="nombre de usuario" v-model="user">
                <label>password:</label>
                <input type="text" placeholder="****************" v-model="password">
                <label>Role:</label>
                <select v-model="role" class="form-select">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <button type="button" @click="register">Registrar</button>
            </form>
        </card>
    </card>
</template>

<script>
import axios from "axios"
const localAPI = axios.create({
    baseURL: "http://localhost:8000",
})
export default {
    components: {

    },
    data () {
        return {
            isLoggedIn: false,
            user: '',
            password: '',
            role: ''
        }
    },
    methods: {
        login () {
            localStorage.setItem('isLoggedIn', true)
            this.$router.push('/')
        },
        logout () {
            localStorage.removeItem('isLoggedIn')
        },
        async register () {
            try {
                const sendData = { name: this.user, password: this.password, role: this.role }
                const { data } = await localAPI.post("/register", sendData);
                localStorage.setItem(data)
                console.log(data)
            } catch (error) {
                console.error(error)
                return false
            }
        }
    }
}
</script>