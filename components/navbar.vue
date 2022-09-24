<template>
  <div class="">
    <!-- Top header start -->
    <header class="top-header bg-active" id="top-header-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8 col-sm-7">
            <div class="list-inline">
              <a href="/"><i class="fa fa-phone"></i>Need Support? +2347098</a>
              <a href="tel:info@elitemocar.com"><i class="fa fa-envelope"></i>info@elitemo.com.ng</a>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-5">
          </div>
        </div>
      </div>
    </header>
    <!-- Top header end -->

    <!-- Main header start -->
    <header class="main-header sh-2">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand company-logo-2" href="/">
            <img src="#" alt="Logo" />
          </a>
          <button class="navbar-toggler" type="button" id="drawer">
            <span class="fa fa-bars" @click="() => setToggleMenu()"></span>
          </button>
          <div class="navbar-collapse collapse w-100 justify-content-end" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active" v-for="(item, index) in navItem" :key="index">
                <a
                  class="nav-link"
                  :href="item.link"
                >
                  {{item.title}}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- Main header end -->

    <!-- Sidenav start -->
    <nav id="sidebar" class="nav-sidebar" v-if="getToggleMenu">
      <!-- Close btn-->
      <div id="dismiss" @click="() => setToggleMenu()">
        <!-- <i class="fa fa-close"></i> -->
        <svg-icon name="close" class="w-4 h-4 cursor-pointer fill-current text-yellow-500"/>
      </div>
      <div class="sidebar-inner">
        <div class="sidebar-logo">
          <a href="/">
            <img src="" alt="Logo"/>
          </a>
        </div>
        <div class="sidebar-navigation">
          <ul class="menu-list">
            <li class="nav-item active" v-for="(item, index) in navItem" :key="index">
                <a
                  :class="item.class"
                  :href="item.link"
                >
                  {{item.title}}
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Sidenav end -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
const navItem = [
  {
    title: 'Home',
    link: '/',
    class: 'active'
  },
  {
    title: 'About',
    link: '/about',
    class: ''
  },
  {
    title: 'Car Listing',
    link: '/car-list',
    class: ''
  },
  {
    title: 'Services',
    link: '/services',
    class: ''
  },
  {
    title: 'Blog',
    link: '/blog',
    class: ''
  },
  {
    title: 'Contact',
    link: '/contact',
    class: ''
  },
];

export default {
  computed: {
    ...mapGetters({
      getToggleMenu: 'settings/getToggleMenu',
    }),
  },

  data() {
    return {
      navItem,
    };
  },

  methods: {

    ...mapMutations({
      setToggleMenu: 'settings/setToggleMenu',
    }),
  },

  created() {},
};
</script>

<style lang="scss">
</style>
