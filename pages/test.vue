<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="test"></lazy-car-banner>
    <!-- Sub Banner end -->
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'site',
  middleware: 'guest',
  computed: {
    ...mapGetters({}),
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions({}),
  },

  mounted() {
    this.$nextTick(() => {});
  },
};
</script>
<style scoped>
</style>
