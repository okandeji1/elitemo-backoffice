<template>
  <main class="content">
    <!-- <div class="page_loader"></div> -->
    <lazy-car-navbar />
    <div class="">
      <div v-if="$nuxt.isOffline">
        <lazy-car-offline> </lazy-car-offline>
      </div>
      <Nuxt v-else />
    </div>
    <lazy-car-footer />
  </main>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({}),
  },

  data() {
    return {};
  },

  head() {
    return {
      link: [
        // External CSS libraries
        { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/animate.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap-submenu.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap-select.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/magnific-popup.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/fonts/flaticon/font/flaticon.css', ssr: false },
        { rel: 'stylesheet', type: 'text/css', href: '/fonts/linearicons/style.css' },
        // { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.mCustomScrollbar.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/dropzone.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/slick.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/lightbox.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/jnoty.css' },
        // Custom stylesheet
        { rel: 'stylesheet', type: 'text/css', href: '/css/sidebar.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/skins/yellow.css' },
        // IE10 viewport hack for Surface/desktop Windows 8 bug
        { rel: 'stylesheet', type: 'text/css', href: '/css/ie10-viewport-bug-workaround.css' },
        // Google fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;300;400;500;600;700;800;900&display=swap' },
      ],
      script: [
        { src: '/js/jquery.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/bootstrap.bundle.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/popper.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.mb.YTPlayer.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/bootstrap-submenu.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/rangeslider.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/bootstrap-select.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.easing.1.3.js', body: true, async: true, crossorigin: 'anonymous' },
        // { src: '/js/jquery.scrollUp.js', body: true, async: true, crossorigin: 'anonymous' },
        // { src: '/js/jquery.mCustomScrollbar.concat.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.filterizr.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.magnific-popup.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.countdown.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jquery.mousewheel.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/dropzone.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/slick.min.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/lightgallery-all.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/jnoty.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/sidebar.js', body: true, async: true, crossorigin: 'anonymous' },
        { src: '/js/app.js', body: true, async: true, crossorigin: 'anonymous' },
        // IE10 viewport hack for Surface/desktop Windows 8 bug
        { src: '/js/ie10-viewport-bug-workaround.js', body: true, async: true, crossorigin: 'anonymous' },
        // Custom javascript
        { src: '/js/ie10-viewport-bug-workaround.js', body: true, async: true, crossorigin: 'anonymous' },
      ],
    };
  },

  methods: {
    ...mapActions({}),
  },

  mounted() {
    this.$nextTick(() => {});
  },
};
</script>

<style>
.content {
  overflow-y: scroll;
}
</style>
