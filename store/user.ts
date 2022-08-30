import { getQuery, notify, states } from '../utils/utils';

export const state = () => ({
  transactions: {},
  users: [],
});

export const getters = {
  getTransactions(state) {
    return state.transactions;
  },

  getUsers(state) {
    return state.users;
  },
};

export const mutations = {
  setTransactions(state, value) {
    return (state.transactions = value);
  },

  setUsers(state, value) {
    return (state.users = value);
  },
};

export const actions = {
  // Register
  async register({ commit }, payload) {
    try {
      const res = await this.$axios.$post('/api/v1/users/register', payload);
      if (res.status) {
        return res;
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },

  // Login or register
  async socialLogin({ commit }, payload) {
    let url;
    const callbackUrl = `${this.$config.websiteUrl}/pool/social-callback`;
    if (payload === 'google') {
      url = `/api/v1/users/login/google?callbackUrl=${callbackUrl}`;
    } else if (payload === 'facebook') {
      url = `/api/v1/users/login/facebook?callbackUrl=${callbackUrl}`;
    } else if (payload === 'twitter') {
      // url = `/api/v1/users/login/twitter?callbackUrl=${callbackUrl}`;
      // FIXME: delete this line if twitter is implemented
      notify({
        type: 'success',
        message: 'Success! Request successful.',
      });
      return;
    } else {
      notify({
        type: 'error',
        message: 'Error! Request Failed. Please contact support',
      });
      return;
    }
    try {
      const res = await this.$axios.$get(url);
      if (res.status) {
        return (window.location = res.data);
      } else {
        return notify({
          type: 'error',
          message: 'Error! Request Failed. Please contact support',
        });
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },

  async socialCallback({ commit, state }) {
    let url;
    const windowUrl = getQuery(window.location.href);
    // @ts-ignore
    const obj = JSON.parse(windowUrl.state);
    const callbackUrl = `${this.$config.websiteUrl}/pool/social-callback`;
    if (obj.provider === 'google') {
      url = `/api/v1/users/callback?callbackUrl=${callbackUrl}`;
      for (const [key, value] of Object.entries(windowUrl)) {
        url += `&${key}=${value}`;
      }
    } else if (obj.provider === 'facebook') {
      url = `/api/v1/users/facebook-callback?callbackUrl=${callbackUrl}`;
      for (const [key, value] of Object.entries(windowUrl)) {
        url += `&${key}=${value}`;
      }
    } else if (obj.provider === 'twitter') {
      // url = `/api/v1/users/twitter-callback?callbackUrl=${callbackUrl}`;
      // for (const [key, value] of Object.entries(windowUrl)) {
      //   url += `&${key}=${value}`;
      // }
    } else {
      notify({
        type: 'error',
        message: 'Error! Request Failed. Please contact support',
      });
      return this.$router.replace('/pool/register');
    }
    try {
      const res = await this.$axios.$get(url);

      if (res.status) {
        this.$auth.setUser(res.data);
        this.$auth.setRefreshToken('local', res.data.refreshToken);
        // this.$auth.setUserToken(res.data.accessToken, res.data.refreshToken).then(() => this.$toast.success('User set!'));
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.accessToken);
        this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + res.data.accessToken);
        this.dispatch('getLoggingUser');
        this.commit('pool/onCloseprofileDrawer'); // Close login drawer
        notify({
          type: 'success',
          message: 'Success! Request successful',
        });
        return this.$router.push('/');
      }
      notify({
        type: 'error',
        message: 'Error! Cannot authenticate user',
      });
      return this.$router.replace('/pool/register');
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },

  async getUsersApi({ commit }, payload) {
    try {
      let url = '/api/v1/users?';
      for (const [key, value] of Object.entries(payload.query)) {
        url += `&${key}=${value}`;
      }
      const res = await this.$axios.$get(url);
      if (res.status)
        return this.commit(
          'user/setUsers',
          res.data,
        );
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },
};
