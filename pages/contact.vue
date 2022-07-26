<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="Contact"></lazy-car-banner>
    <!-- Sub Banner end -->
    <!-- Contact 1 start -->
    <lazy-car-contact header="Contact Us" :paragraph="paragraph"></lazy-car-contact>
    <!-- Contact 1 end -->
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio quod, adipisci id rem, alias laudantium quae beatae dolorum delectus impedit! Expedita quas explicabo nam reprehenderit voluptas facere rerum culpa.';
export default {
  layout: 'site',
  middleware: 'guest',
  computed: {
    ...mapGetters({}),
  },

  data() {
    return {
        paragraph,
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
<style scoped></style>
