<template>
  <main>
    <a-drawer
      placement="right"
      :visible="addPostDrawer"
      :destroyOnClose="true"
      @close="toggleAddPostDrawer(false)"
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
            <p class="mb-8 text-2xl font-bold md:mt-8 text-primary-default-main">Add Post</p>
          </div>
          <div class="mt-6">
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label for="title" class="text-sm font-semibold text-primary-default-main"> title </label>
              <a-input @blur="$v.post.header.$touch()" v-model="post.header" placeholder="Title" style="margin-top: 2px" />
              <template v-if="$v.post.header.$error">
                <small class="text-xs text-red-600" v-if="!$v.post.header.required">Title is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 mr-2 text-left">
              <label class="text-sm font-semibold text-primary-default-main">Description</label>
              <client-only placeholder="Loading Your Editor...">
                <vue-editor :editorToolbar="customToolbar" placeholder="Description..." v-model="post.description" class="text-black"></vue-editor>
              </client-only>
              <template v-if="$v.post.description.$error">
                <small class="text-xs text-red-600" v-if="!$v.post.description.required">Description is required</small>
              </template>
            </div>
            <div class="flex flex-col w-full mt-2 mb-4 text-left">
              <label for="image" class="text-sm font-semibold text-primary-default-main">Images</label>
              <a-input
                @blur="$v.post.image.$touch()"
                size="large"
                type="file"
                name="image[]"
                :multiple="true"
                @change="handleFileUpload"
                class="mt-1"
              >
              </a-input>
              <template v-if="$v.post.image.$error">
                <small class="text-xs text-red-600" v-if="!$v.post.image.required">Logo is required</small>
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
          <a-button size="large" class="w-full mt-4 text-white bg-primary-m-success" @click="addPost" :disabled="$v.anyError" :loading="isLoading"
            >Add Post</a-button
          >
        </div>
      </div>
    </a-drawer>
  </main>
</template>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { message } from 'ant-design-vue';
import { notify } from '../utils/utils';
import { required } from 'vuelidate/lib/validators';

export default {
  computed: {
    ...mapGetters({
      addPostDrawer: 'settings/addPostDrawer',
    }),
  },

  data() {
    return {
      customToolbar: [],

      isLoading: false,
      post: this.createFreshDataObject(),
    };
  },

  validations() {
    return {
      post: {
        header: { required },
        description: { required },
        image: { required },
      },
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    async addPost() {
      this.isLoading = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const newFormData = this.post;
        const formData: any = new FormData();
        for (const [key, value] of Object.entries(newFormData)) {
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
          const res = await this.addPostApi(formData);

          await this.createFreshDataObject();
          this.toggleAddPostDrawer(false);
          this.isLoading = false;
          this.getPostsApi({ query: { limit: 50 } });

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
      const files = e.target.files;
      const images: any = [];
      for (const file of files) {
        const isValid = this.beforeUpload(file);

        if (isValid) {
          images.push(file);
        }
      }

      if (images.length > 0) {
        this.post.image = images;
      }
    },

    createFreshDataObject() {
      return {
        header: '',
        description: '',
        image: '',
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

    ...mapMutations({
      toggleAddPostDrawer: 'settings/toggleAddPostDrawer',
    }),

    ...mapActions({
      addPostApi: 'blog/addPostApi',
      getPostsApi: 'blog/getPostsApi',
    }),
  },

  mounted() {
    this.responsiveCustomBar();
  },
};
</script>
