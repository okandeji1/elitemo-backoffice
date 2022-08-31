import { notify } from '../utils/utils';

export const state = () => ({
    posts: [],
    post: {},
  });
  
  export const getters = {
    getPosts(state) {
      return state.posts;
    },

    getPost(state) {
      return state.post;
    },
  };
  
  export const mutations = {
    setPosts(state, value) {
      return (state.posts = value);
    },

    setPost(state, value) {
      return state.post = value;
  },
  };
  
  export const actions = {

    async getPostsApi({ commit, state }, payload) {
      try {
        let url = '/api/v1/blogs?';
        for (const [key, value] of Object.entries(payload.query)) {
          url += `&${key}=${value}`;
        }
        const res = await this.$axios.$get(url);
  
        if (res.status) {
          return this.commit('blog/setPosts', res.data);
        }
      } catch (error) {
        notify({
          type: 'error',
          message: error.response.data.message,
        });
      }
    },
  
    async addPostApi({ commit }, payload) {
      try {
        const res = await this.$axios.$post('/api/v1/blogs/add/post', payload);
        return res;
      } catch (error) {
        notify({
          type: 'error',
          message: error.response.data.message,
        });
      }
    },
  };
  