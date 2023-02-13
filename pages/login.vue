<template>
    <div class="container-fluid">
        <card>
            <h1 class="card-title">Registro de usuarios</h1>
            <form class="m-3">
                <label class="row form-label">Usuario:
                    <input class="form-control" type="text" placeholder="nombre de usuario" v-model="user"></label>
                <label class="row form-label">password:
                    <input class="form-control" type="text" placeholder="****************" v-model="password"></label>
                <label class="row form-label">Role:
                    <select class="custom-select" v-model="role" aria-label="Elige un role de usuario">
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                </label>
            </form>
            <button class="mt-2 btn btn-primary w-100" type="button" @click="register">Registrar</button>
        </card>
        <card>
            <h1 class="card-title">Login de usuarios</h1>
            <form class="m-3">
                <label class="row form-label">Usuario:
                    <input class="form-control" type="text" placeholder="nombre de usuario" v-model="user"></label>
                <label class="row form-label">password:
                    <input class="form-control" type="text" placeholder="****************" v-model="password"></label>
            </form>
            <button class="mt-2 btn btn-primary w-100" type="button" @click="login">Login</button>
        </card>
    </div>
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