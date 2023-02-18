<template>
  <card>
    <h5 slot="header" class="title">Añadir cliente</h5>
    <form @submit.prevent="registerClient">
      <div class="row">
        <div class="col-md-3">
          <base-input type="text" label="Nombre" placeholder="mike" v-model="user.name" required>
          </base-input>
        </div>
        <div class="col-md-5">
          <base-input type="text" label="Apellidos" placeholder="wilson" v-model="user.secondName" required>
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email" label="correo" placeholder="mike@email.com" v-model="user.email" required>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7">
          <base-input type="text" label="Dirección" placeholder="Home Address" v-model="user.address" required>
          </base-input>
        </div>
        <div class="col-md-5">
          <base-input type="text" label="Numero de telefono" placeholder="0923523090" v-model="user.telephone" required>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text" label="Numero de identidad" placeholder="123456789" v-model="user.identity" required>
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text" label="Empresa" placeholder="Mike Bussines" v-model="user.company" required>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <base-input type="text" label="Tipo de empresa" placeholder="mipyme" v-model="user.companyType" required>
          </base-input>
        </div>
        <div class="col-md-9">
          <base-input type="text" label="Importadoras" placeholder="Logistic international" v-model="user.importer"
            required>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input label="Información sobre el usuario">
            <textarea class="form-control" placeholder="Información extra..." v-model="user.info"></textarea>
          </base-input>
        </div>
      </div>

      <base-button native-type="submit" type="primary" class="btn-fill">
        Guardar Usuario
      </base-button>
    </form>
  </card>
</template>

<script>
import axios from "axios"
const localAPI = axios.create({
  baseURL: "http://localhost:8000",
})

export default {
  data () {
    return {
      user: {
        name: '',
        secondName: '',
        identity: '',
        company: '',
        address: '',
        email: '',
        telephone: '',
        companyType: '',
        importer: '',
        info: '',
        budgets: [],
        bills: [],
        packaging: []
      }
    }
  },
  methods: {
    async registerClient () {
      try {
        const token = localStorage.getItem('token');
        const body = {
          'body': this.user,
          'token': token
        }
        const { data } = await localAPI.post("/client", body)

        alert(`Usuario creado ${data.data.name}`);
        this.$router.push('/')
      } catch (error) {
        console.error(error)
        alert(error.response.data.error)
        return false
      }
    }
  }
}
</script>
<style></style>
