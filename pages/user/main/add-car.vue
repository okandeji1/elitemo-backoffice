<template>
  <main>
    <div class="mx-auto">
      <div class="flex justify-center">
        <h1 class="text-2xl font-bold md:mt-8 text-primary-default-main">Add New Car</h1>
      </div>
      <div class="px-2 my-2 text-xs md:px-8">
        <!-- Car Data -->
        <form class="mx-auto mt-20 wrapper form">
          <div class="mb-4 border-b border-gray-500 main form-data">
            <div class="mb-4 left">
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Model</label>
                <a-input size="large" placeholder="Enter model" v-model.trim="car.model" class="mt-1" @blur="$v.car.model.$touch()"> </a-input>
                <template v-if="$v.car.model.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.model.required">Model is required</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Brand</label>
                <a-input size="large" placeholder="Enter brand" v-model.trim="car.brand" @blur="$v.car.brand.$touch()" class="mt-1"> </a-input>
                <template v-if="$v.car.brand.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.brand.required">Brand is required</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Make</label>
                <a-input size="large" placeholder="Enter make" v-model.trim="car.make" @blur="$v.car.make.$touch()" class="mt-1"> </a-input>
                <template v-if="$v.car.make.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.make.required">Make is required</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">cost Price</label>
                <a-input
                  size="large"
                  placeholder="Enter cost price"
                  type="number"
                  v-model.trim="car.costPrice"
                  class="mt-1"
                  @blur="$v.car.costPrice.$touch()"
                >
                </a-input>
                <template v-if="$v.car.costPrice.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.costPrice.required">cost price is required</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Selling Price</label>
                <a-input
                  size="large"
                  placeholder="Enter selling price"
                  type="number"
                  v-model.trim="car.sellingPrice"
                  class="mt-1"
                  @blur="$v.car.sellingPrice.$touch()"
                >
                </a-input>
                <template v-if="$v.car.sellingPrice.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.sellingPrice.required">selling price is required</small>
                </template>
              </div>
              <div class="mb-4">
                <label for="image" class="text-sm font-semibold text-primary-default-main"> Images</label>
                <a-input
                  @blur="$v.car.image.$touch()"
                  size="large"
                  type="file"
                  name="image[]"
                  :multiple="true"
                  @change="handleFileUpload"
                  class="mt-1"
                >
                </a-input>
                <!-- <a-upload @blur="$v.car.image.$touch()" size="large"
                name="file"
                :multiple="true"
                @change="handleFileUpload"
                class="mt-1">
                <i class="fa fa-upload" aria-hidden="true"></i>
                </a-upload> -->
                <template v-if="$v.car.image.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.image.required">image is required</small>
                </template>
              </div>
            </div>
            <div class="mb-4 right">
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Dealer</label>
                <a-select v-model="car.dealer" class="block mt-1" size="large">
                  <a-select-option v-for="(dealer, index) in dealers" :key="index" :value="dealer.name"> {{ dealer.name }} </a-select-option>
                </a-select>
                <template v-if="$v.car.dealer.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.dealer.required">Select a dealer</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Type</label>
                <a-select v-model="car.type" class="block mt-1" size="large">
                  <a-select-option v-for="(type, index) in types" :key="index" :value="type.slug"> {{ type.slug }} </a-select-option>
                </a-select>
                <template v-if="$v.car.type.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.type.required">Select a car type</small>
                </template>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-primary-default-main">Description</label>
                <client-only placeholder="Loading Your Editor...">
                  <vue-editor :editorToolbar="customToolbar" placeholder="Description..." v-model="car.description" class="text-black"></vue-editor>
                </client-only>
                <template v-if="$v.car.description.$error">
                  <small class="text-xs text-red-600" v-if="!$v.car.description.required">Description is required</small>
                </template>
              </div>
            </div>
          </div>
          <div class="pb-4 my-4 border-b border-gray-500">
            <div class="">
              <h1 class="text-center text-2xl font-bold text-primary-default-main">Features</h1>
            </div>

            <div>
              <a-checkbox-group name="checkboxgroup" :options="features" @change="handleChecked" />
            </div>
          </div>
          <div class="pb-4 my-4 border-b border-gray-500">
            <div class="">
              <h1 class="text-center text-2xl font-bold text-primary-default-main">Specifications</h1>
            </div>

            <div class="bank">
              <div class="mb-4" v-for="(item, index) in specData" :key="index">
                <label class="text-sm font-semibold text-primary-default-main">{{ item.label }}</label>
                <a-input
                  size="large"
                  :type="item.type"
                  :placeholder="item.label"
                  v-model.trim="specifications[item.model]"
                  class="mt-1"
                  @blur="$v.specifications[item.model].$touch()"
                >
                </a-input>
                <template v-if="$v.specifications[item.model].$error">
                  <small class="text-xs text-red-600" v-if="!$v.specifications[item.model].required">{{ item.label }} is required</small>
                </template>
              </div>
            </div>
          </div>
          <div class="my-4 submit">
            <div class="grid grid-cols-2 gap-4 mx-2 md:flex md:flex-row md:justify-between md:px-2 md:mx-4 button">
              <a-button size="large" @click="resetAgentForm" class="inline w-full my-3 text-white bg-primary-m-danger md:w-40">Reset</a-button>

              <a-button
                @click="addCar"
                :disabled="$v.anyError"
                :loading="isLoading"
                size="large"
                class="inline w-full my-3 text-white md:w-40 bg-primary-m-success"
                >Apply</a-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

import { minLength, required } from 'vuelidate/lib/validators';
import { message } from 'ant-design-vue';
import { notify, cleanEmptyObj } from '../../../utils/utils';

const features = [
  'Cruise Control',
  'Airbags',
  'Air Conditioning',
  'Alarm System',
  'Audio Interface',
  'CDR Audio',
  'Seat Heating',
  'Park Assist',
  'Automatic Climate Control',
  'Auto Start/Stop',
];

const types = [
  {
    slug: 'FEATURED',
  },
  {
    slug: 'NEW',
  },
];

const specData = [
  {
    label: 'Fuel Type',
    model: 'fuelType',
    type: 'text',
  },
  {
    label: 'Speed',
    model: 'speed',
    type: 'text',
  },
  {
    label: 'Transmission',
    model: 'transmission',
    type: 'text',
  },
  {
    label: 'Gears',
    model: 'gears',
    type: 'text',
  },
  {
    label: 'Year',
    model: 'year',
    type: 'number',
  },
  {
    label: 'Horse Power',
    model: 'horsePower',
    type: 'text',
  },
  {
    label: 'Top Speed',
    model: 'topSpeed',
    type: 'text',
  },
  {
    label: 'Drive Train',
    model: 'driveTrain',
    type: 'text',
  },
  {
    label: 'Doors',
    model: 'doors',
    type: 'text',
  },
  {
    label: 'Location',
    model: 'location',
    type: 'text',
  },
  {
    label: 'Mileage',
    model: 'mileage',
    type: 'text',
  },
  {
    label: 'Body Style',
    model: 'bodyStyle',
    type: 'text',
  },
  {
    label: 'Condition',
    model: 'condition',
    type: 'text',
  },
  {
    label: 'Engine',
    model: 'engine',
    type: 'text',
  },
];

export default {
  computed: {
    ...mapGetters({
      dealers: 'dealer/getDealers',
    }),
  },

  data() {
    return {
      features,
      types,
      specData,
      car: this.createFreshDataObject(),
      specifications: this.createFreshSpecObject(),
      customToolbar: [],
      isLoading: false,
    };
  },

  validations() {
    return {
      car: {
        model: { required },
        brand: { required },
        make: { required },
        dealer: { required },
        description: { required },
        costPrice: { required },
        sellingPrice: { required },
        type: { required },
        features: { required },
        image: { required },
      },
      specifications: {
        fuelType: { required },
        speed: { required },
        transmission: { required },
        gears: { required },
        year: { required },
        horsePower: { required },
        topSpeed: { required },
        driveTrain: { required },
        doors: { required },
        location: { required },
        mileage: { required },
        bodyStyle: { required },
        condition: { required },
        engine: { required },
      },
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    async addCar() {
      this.isLoading = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.car.specifications = this.specifications;
        const newFormData = cleanEmptyObj(this.car);
        const formData: any = new FormData();
        for (const [key, value] of Object.entries(newFormData)) {
          if (key === 'specifications' || key === 'features') {
            formData.append(key, JSON.stringify(value));
            continue;
          }

          if (key === 'image') {
            // @ts-ignore
            for (const file of value) {
              formData.append('image', file);
              continue;
            }
          }
          formData.append(`${key}`, value);
        }

        // Proccess form
        try {
          const res = await this.addCarApi(formData);

          if (res.status) {
            this.createFreshDataObject();
            this.createFreshSpecObject();
            this.isLoading = false;

            notify({
              type: 'success',
              message: res.message,
            });
          }
        } catch (error) {}
      }
      this.isLoading = false;
    },

    handleChecked(e) {
      this.car.features = [...e];
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
      const files = e.target.files;
      const images: any = [];
      for (const file of files) {
        const isValid = this.beforeUpload(file);

        if (isValid) {
          images.push(file);
        }
      }

      if (images.length > 0) {
        this.car.image = images;
      }
    },

    // async handleFileUpload(e) {
    //   const file = e.file;

    //   const isValid = await this.beforeUpload(file);
    //   console.log({isValid});

    //   if (!isValid) {
    //     console.log('invalid');
    //     this.car.image = '';
    //     return;
    //   }

    //   if (e.file.status === 'done') {
    //     this.car.image = e.fileList;
    //   }
    //   console.log(this.car.image);

    // },

    resetAgentForm() {
      this.car = this.createFreshDataObject();
      this.$v.$reset();
    },

    createFreshDataObject() {
      return {
        model: '',
        brand: '',
        make: '',
        dealer: '',
        type: '',
        description: '',
        costPrice: '',
        sellingPrice: '',
        features: null,
        image: null,
      };
    },

    createFreshSpecObject() {
      return {
        fuelType: '',
        speed: '',
        transmission: '',
        gears: '',
        year: '',
        horsePower: '',
        topSpeed: '',
        driveTrain: '',
        doors: '',
        location: '',
        mileage: '',
        bodyStyle: '',
        condition: '',
        engine: '',
      };
    },

    responsiveCustomBar() {
      const myCustomToolbar = [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block'],
        [{ color: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image'],
      ];

      if (this.screens.xs == true) {
        this.customToolbar = myCustomToolbar.slice(0, 2);
      } else {
        this.customToolbar = myCustomToolbar;
      }
    },

    ...mapActions({
      addCarApi: 'car/addCarApi',
    }),

    mounted() {
      this.responsiveCustomBar();
    },
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 800px) {
  .layout-container {
    display: grid;
    grid-template-columns: 24rem 1fr;
  }
}

.layout-container {
  min-height: 100vh;
}

.layout-body__1 {
  height: 100%;
}

.body-container {
  display: grid;
  gap: 2rem;
  grid-template-areas:
    'icon logo'
    'main main'
    'footer footer';
  grid-template-rows: repeat(3, minmax(2rem, min-content)) auto;
  grid-template-columns: 2.625rem auto;
  min-height: 100vh;
  padding: 2rem;
  align-items: center;
}

.body-icon {
  grid-area: icon / icon / icon / icon;
}

.svg-bac {
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6.25rem;
  font-size: 1.25rem;
  line-height: 0;
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(235, 235, 235);
}
.body-logo {
  grid-area: logo / logo / logo / logo;
}
.body-main {
  grid-area: main / main / main / main;
  width: 100%;
}

.icon-size {
  width: 100%;
  max-width: 8rem;
  display: block;
}

.form-container {
  display: grid;
  row-gap: 1.5rem;
}

.login-btn {
  display: inline-block;
  width: 100%;
  min-height: 1.5rem;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6.25rem;
  transition: background-color 0.2s ease 0s;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(12, 207, 97);
  font-size: 1rem;
  line-height: 1.5rem;
  height: 3rem;
  padding: 0px 1.5rem;
}

.body-footer {
  grid-area: footer / footer / footer / footer;
}

.footer-link {
  display: inline-block;
  padding: 0px;
  font: inherit;
  color: rgb(12, 207, 97);
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  text-decoration: none;
}

.form {
  display: grid;
  grid-template-areas:
    'main'
    'bank'
    'upload '
    'submit ';
  grid-template-rows: repeat(3, minmax(2rem, min-content)) auto;
  grid-auto-columns: 1fr;
}

@media only screen and (min-width: 768px) {
  .main {
    display: grid;
    grid-template-areas: 'left right';
    column-gap: 2rem;
    grid-auto-columns: 1fr 1fr;
  }

  .upload {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
  }
  .bank {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
}

.main,
.bank,
.upload {
  // display: block;
  padding: 0 1rem;
}

.wrapper {
  width: 100%;
}

@media (min-width: 640px) {
  .wrapper {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    max-width: 960px;
  }
}

.ant-input:focus,
.ant-input-group:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  @apply border-primary-bg-sec;
}
.ant-input:hover,
.ant-input-group:hover {
  @apply border-primary-bg-sec;
}

.ant-input-group .ant-input:hover {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  @apply border-primary-bg-sec;
}

.ant-input-group-addon .ant-select-open .ant-select-selection,
.ant-input-group-addon .ant-select-focused .ant-select-selection {
  @apply text-primary-default-main;
}
</style>
