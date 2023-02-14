<template>
  <base-nav v-model="showMenu" class="navbar-absolute top-navbar" type="white" :transparent="true">
    <div slot="brand" class="navbar-wrapper">
      <div class="navbar-toggle d-inline" :class="{ toggled: $sidebar.showSidebar }">
        <button type="button" class="navbar-toggler" @click="toggleSidebar">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <a class="navbar-brand ml-xl-3 ml-5" href="/">{{ routeName }}</a>
    </div>

    <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
      <div class="search-bar input-group" @click="searchModalVisible = true">
        <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
          <i class="tim-icons icon-zoom-split"></i>
        </button>
        <!-- You can choose types of search input -->
      </div>
      <modal :show.sync="searchModalVisible" class="modal-search" id="searchModal" :centered="false" :show-close="true">
        <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup"
          placeholder="SEARCH" />
      </modal>

      <!-- <nav-item tag="li" title-classes="nav-link" class="nav-item mb-5" menu-classes="dropdown-navbar">
        <a class="navbar-brand ml-xl-3 ml-5" href="/">Cerrar Sesión</a>
      </nav-item> -->

      <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" title-classes="nav-link" class="nav-item">
        <template slot="title">
          <div class="notification d-none d-lg-block d-xl-block"></div>
          <i class="tim-icons icon-sound-wave"></i>
          <p class="d-lg-none">Nuevas notificaciones</p>
        </template>
      </base-dropdown>
      <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" class="nav-item" title-classes="nav-link"
        menu-classes="dropdown-navbar">
        <template slot="title">
          <div class="notification d-none d-lg-block d-xl-block"></div>
          <i class="bi bi-box-arrow-left"></i>
          <a class="d-lg-none" href="/login" @click="localStorage.clear()">
            <p>Cerrar Sesión</p>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import { BaseNav, Modal, BaseNavItem } from '@/components'

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal,
    BaseNavItem,
  },
  computed: {
    routeName () {
      const { path } = this.$route;
      let parts = path.split('/')
      if (parts == ',') {
        return 'Dashboard';
      }
      return parts.map(p => this.capitalizeFirstLetter(p)).join(' ');
    },
    isRTL () {
      return this.$rtl.isRTL;
    }
  },
  data () {
    return {
      localStorage: window.localStorage,
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter (string) {
      if (!string || typeof string !== 'string') {
        return ''
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    closeDropDown () {
      this.activeNotifications = false;
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggleMenu () {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style scoped>
.top-navbar {
  top: 0px;
}
</style>
