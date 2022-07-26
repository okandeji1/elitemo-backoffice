
export const state = () => ({});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};

export const mutations = {
  setLoggedInUser(state, user) {
    return (state.auth.user = user);
  },
};

export const actions = {

  async getLoggingUser() {
    try {
      const res = await this.$axios.$get('/api/v1/users/me');
      if (res.status) {
        this.commit('setLoggedInUser', res.data);
        return;
      }
    } catch (error) {}
  },
};
