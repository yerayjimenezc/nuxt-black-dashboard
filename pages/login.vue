<template>
    <card>
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
        <card>
            <h1 class="card-title">Login de usuarios</h1>
            <form>
                <label>Usuario:</label>
                <input type="text" placeholder="nombre de usuario" v-model="user">
                <label>password:</label>
                <input type="text" placeholder="****************" v-model="password">
                <button type="button" @click="login">Login</button>
            </form>
        </card>
        <p>{{ token }}</p>
        <p>{{ userToken }}</p>
        <pre>{{ users }}</pre>
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
            users: null,
            user: '',
            password: '',
            role: '',
            token: null,
            userToken: null
        }
    },
    async mounted () {
        const token = localStorage.getItem('token');
        const headers = {
            'auth-token': token
        };
        const { data } = await localAPI.get('/users', { headers });
        console.log(data)
        this.users = data
    },
    methods: {
        async login () {
            try {
                const sendData = { name: this.user, password: this.password }
                const { data } = await localAPI.post("/login", sendData);
                console.log(data)
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', data.data.user)
                localStorage.setItem('role', data.data.role)
            } catch (error) {
                console.error(error)
                return false
            }
        },
        logout () {
            localStorage.removeItem('isLoggedIn')
        },
        async register () {
            try {
                const sendData = { name: this.user, password: this.password, role: this.role }
                const { data } = await localAPI.post("/register", sendData);
                console.log(data)
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', data.data.user)
                localStorage.setItem('role', data.data.role)
            } catch (error) {
                console.error(error)
                return false
            }
        }
    }
}
</script>