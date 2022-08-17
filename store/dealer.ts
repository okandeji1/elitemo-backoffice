import { notify } from '../utils/utils';
export const state = () => ({
  dealers: [],
  dealer: {},
});

export const getters = {
  getDealers(state) {
    return state.dealers;
  },

  getDealer(state) {
    return state.dealer;
  },
};

export const mutations = {
  setDealers(state, value) {
    return (state.dealers = value);
  },

  setDealer(state, value) {
    return (state.dealer = value);
  },
};

export const actions = {
  async getDealerApi({ commit }, payload) {
    try {
      let url = '/api/v1/dealers?';
      for (const [key, value] of Object.entries(payload?.query)) {
        url += `&${key}=${value}`;
      }
      const res = await this.$axios.$get(url);
      if (res.status) return this.commit('dealer/setDealers', res.data);
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },
};
