<template>
  <div class="partners">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="custom-slider slide-box-btn">
            <div class="custom-box" v-for="(item, index) in dealers" :key="index">
              <img :src="item.logo" alt="brand" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      dealers: 'dealer/getDealers',
    }),
  },
};
</script>
