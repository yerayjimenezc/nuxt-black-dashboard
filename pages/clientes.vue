<template>
  <div class="row m-auto">
    <div class="row w-100">
      <div class="col input-group mb-3">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
        <div class="input-group-append">
          <button class="btn m-0 p-0 px-2">Search</button>
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn d-flex p-2">
          <i class="bi bi-person-add"></i>
          <p class="m-0 pl-1">Añadir Cliente</p>
        </button>
      </div>
    </div>
    <div class="row w-100">
      <div class="col col-12">
        <ul class="list-group">
          <li v-for="(el, i) in users" class="card list-group-item my-1">
            <div class="row p-1">
              <p class="col">{{ el.nombre }}, {{ el.apellidos }}</p>
              <p class="col">{{ el.empresa }}</p>
              <p class="col">{{ el.empresaType }}</p>
              <button class="col btn">Editar cliente</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="col-md-12"><edit-profile-form> </edit-profile-form></div> -->
    </div>
  </div>
</template>
<script>
import EditProfileForm from '../components/UserProfile/EditProfileForm.vue';

export default {
  middleware: 'authentication',
  name: 'clientes',
  components: {
    EditProfileForm,
  },
  data () {
    return {
      users: [
        {
          id: 37984205,
          nombre: 'Juan',
          apellidos: 'jimenez lopez',
          empresa: 'cugranca',
          direccion: 'rua ficticia entre pinares',
          email: 'juanJim@cugranca.com',
          telefono: 7486930630,
          empresaType: 'miPyme',
          importadoras: 'HFIWAFN',
          presupuestos: [23124, 241642, 12907412],
          facturas: [873154, 809641, 864031],
          empaques: [5642319, 634, 247]
        },
        {
          id: 37984202,
          nombre: 'Juan',
          apellidos: 'jimenez lopez',
          empresa: 'cugranca',
          direccion: 'rua ficticia entre pinares',
          email: 'juanJim@cugranca.com',
          telefono: 7486930630,
          empresaType: 'miPyme',
          importadoras: 'HFIWAFN',
          presupuestos: [23124, 241642, 12907412],
          facturas: [873154, 809641, 864031],
          empaques: [5642319, 634, 247]
        }
      ]
    }
  }
};
</script>
<style></style>
