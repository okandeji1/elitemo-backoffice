import { notify } from '../utils/utils';
export const state = () => ({
  car: {},
  cars: []
});

export const getters = {
  getCars(state) {
    return state.cars;
  },

  getCar(state) {
    return state.car;
  },
};

export const mutations = {
  setCars(state, value) {
    return (state.cars = value);
  },

  setCar(state, value) {
    return (state.car = value);
  },
};

export const actions = {
  async getCarsApi({ commit, state}, payload) {
    try {
      let url = '/api/v1/cars?';
      for (const [key, value] of Object.entries(payload.query)) {
        url += `&${key}=${value}`;
      }
      const res = await this.$axios.$get(url);
      if (res.status) return this.commit('car/setCars', res.data);
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },
};
