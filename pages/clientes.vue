<template>
  <div class="row m-auto">
    <div class="row w-100">
      <div class="col input-group mb-0">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
        <div class="input-group-append">
          <button class="btn mt-0 p-0 px-2">Buscar</button>
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <router-link :to="{ path: '/nuevo-cliente' }">
          <button class="btn d-flex p-2">
            <i class="bi bi-person-add"></i>
            <p class="m-0 pl-1">Añadir Cliente</p>
          </button>
        </router-link>
      </div>
    </div>
    <div v-if="users" class="row w-100">
      <div class="col col-12">
        <ul class="list-group">
          <li v-for="(el, i) in users" class="card list-group-item my-1 py-1">
            <div class="row p-1 d-flex align-items-center">
              <p class="col">{{ el.name }}, {{ el.secondName }}</p>
              <p class="col-2">{{ el.company }}</p>
              <p class="col-2">{{ el.companyType }}</p>
              <button class="col-3 btn mx-3">Editar</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="col-md-12"><edit-profile-form> </edit-profile-form></div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios"
const localAPI = axios.create({
  baseURL: "http://localhost:8000",
})

export default {
  middleware: 'authentication',
  name: 'clientes',
  data () {
    return {
      users: null
    }
  },
  async mounted () {
    try {
      const token = localStorage.getItem('token')
      const { data } = await localAPI.get("/clients", {
        headers: {
          Authorization: `${token}`
        }
      })
      this.users = data
    } catch (error) {
      console.error(error)
      alert(error.response.data.error)
      return false
    }
  }
}
</script>

<style></style>
