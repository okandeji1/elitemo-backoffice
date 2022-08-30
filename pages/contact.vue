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
const paragraph = 'We sincerely appreciate your visit and as we want you to have a totally stress free experience with elitemo cars,we request that you reach out to us through our friendly customer support team anytime for further enquiries.';
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
