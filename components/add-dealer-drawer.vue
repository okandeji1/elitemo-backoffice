<template>
  <main>
    <a-drawer
      placement="right"
      :visible="addDealerDrawer"
      :destroyOnClose="true"
      @close="toggleAddDealerDrawer(false)"
      class="my-drawer"
      :headerStyle="{
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        height: '60px',
        width: '100%',
        background: '#fff',
      }"
    >
      <div>
        <div class="modal-body">
          <div class="modal_body-title">
            <p class="mb-8 text-2xl font-bold md:mt-8 text-primary-default-main">Add Dealer</p>
          </div>
          <div class="mt-6">
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label for="name" class="text-sm font-semibold text-primary-default-main"> Name </label>
              <a-input @blur="$v.dealer.name.$touch()" v-model="dealer.name" placeholder="Name" style="margin-top: 2px" />
              <small class="text-xs text-red-600" v-if="!$v.dealer.name.minLength"
                >Name must have at least {{ $v.dealer.name.$params.minLength.min }} letters.
              </small>
              <template v-if="$v.dealer.name.$error">
                <small class="text-xs text-red-600" v-if="!$v.dealer.name.required">Name is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 mr-2 text-left">
              <label for="email" class="text-sm font-semibold text-primary-default-main"> Email </label>
              <a-input @blur="$v.dealer.email.$touch()" v-model="dealer.email" placeholder="Email" />
              <small class="text-xs text-red-600" v-if="!$v.dealer.email.email"> Email is not valid </small>
              <template v-if="$v.dealer.email.$error">
                <small class="text-xs text-red-600" v-if="!$v.dealer.email.required">Email is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label for="phoneNumber" class="text-sm font-semibold text-primary-default-main"> Phone Number </label>
              <a-input @blur="$v.dealer.phone.$touch()" v-model="dealer.phone" placeholder="Phone Number" type="number" />
              <small class="text-xs text-red-600" v-if="!$v.dealer.phone.minLength"
                >Phone number must be exactly {{ $v.dealer.phone.$params.minLength.min }} numbers.
              </small>
              <template v-if="$v.dealer.phone.$error">
                <small class="text-xs text-red-600" v-if="!$v.dealer.phone.required">Phone Number is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label class="text-sm font-semibold text-primary-default-main">Address</label>
              <a-textarea @blur="$v.dealer.address.$touch()" class="mt-1" v-model="dealer.address" auto-size style="min-height: 40px" />
              <template v-if="$v.dealer.address.$error">
                <small class="text-xs text-red-600" v-if="!$v.dealer.address.required">Address is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label for="image" class="text-sm font-semibold text-primary-default-main">Logo</label>
              <a-input
                @blur="$v.dealer.image.$touch()"
                size="large"
                type="file"
                name="image"
                :multiple="true"
                @change="handleFileUpload"
                class="mt-1"
              >
              </a-input>
              <template v-if="$v.dealer.image.$error">
                <small class="text-xs text-red-600" v-if="!$v.dealer.image.required">Logo is required</small>
              </template>
            </div>
          </div>
        </div>
        <div
        class="block text-center modal-footer"
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #718096',
          padding: '20px 48px',
          textAlign: 'right',
          zIndex: 5,
        }"
      >
        <a-button size="large" class="w-full mt-4 text-white bg-primary-m-success" @click="addDealer"
        :disabled="$v.anyError" :loading="isLoading">Add Dealer</a-button>
      </div>
      </div>
    </a-drawer>
  </main>
</template>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { message } from 'ant-design-vue';
import { notify } from '../utils/utils';
import { minLength, required, email } from 'vuelidate/lib/validators';

export default {
  computed: {
    ...mapGetters({
      addDealerDrawer: 'settings/addDealerDrawer',
    }),
  },

  data() {
    return {
      isLoading: false,
      dealer: this.createFreshDataObject(),
    };
  },

  validations() {
    return {
      dealer: {
        name: { required, minLength: minLength(4) },
        email: { required, email },
        address: { required },
        phone: { required, minLength: minLength(10) },
        image: { required },
      },
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    async addDealer() {
      this.isLoading = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const newFormData = this.dealer;
        const formData: any = new FormData();
        for (const [key, value] of Object.entries(newFormData)) {
          formData.append(`${key}`, value);
        }

        // Proccess form
        try {
          const res = await this.addDealerApi(formData);

          this.createFreshDataObject();
          this.toggleAddDealerDrawer(false);
          this.isLoading = false;
          this.getDealerApi({ query: { limit: 50 } });

          notify({
            type: 'success',
            message: res.message,
          });
        } catch (error) {}
      }
      this.isLoading = false;
    },

    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('Invalid file format!');
      }

      const isLt2M = file.size / 1024 / 1024 < 4;

      if (!isLt2M) {
        message.error('Image must be smaller than 4MB!');
      }

      return isJpgOrPng && isLt2M;
    },

    handleFileUpload(e) {
        const file = e.target.files[0];

      const isValid = this.beforeUpload(file);

      if (!isValid){
        this.dealer.image = '';
        return;
      };

      if (e.target.name === 'image') {
          this.dealer.image = e.target.files[0];
      }
    },

    createFreshDataObject() {
      return {
        name: '',
        email: '',
        address: '',
        phone: '',
        image: '',
      };
    },

    ...mapMutations({
      toggleAddDealerDrawer: 'settings/toggleAddDealerDrawer',
    }),

    ...mapActions({
      addDealerApi: 'dealer/addDealerApi',
      getDealerApi: 'dealer/getDealerApi',
    }),
  },
};
</script>
