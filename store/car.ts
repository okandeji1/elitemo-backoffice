import { notify } from '../utils/utils';
export const state = () => ({
  car: {},
  cars: [],
  featuredCars: [],
  newCars: [],
});

export const getters = {
  getCars(state) {
    return state.cars;
  },

  getCar(state) {
    return state.car;
  },

  getFeaturedCars(state) {
    return state.featuredCars;
  },

  getNewCars(state) {
    return state.newCars;
  },
};

export const mutations = {
  setCars(state, value) {
    return (state.cars = value);
  },

  setCar(state, value) {
    return (state.car = value);
  },

  setFeaturedCars(state, value) {
    return state.featuredCars = value;
  },

  setNewCars(state, value) {
    return state.newCars = value;
  },
};

export const actions = {
  async getCarsApi({ commit, state }, payload) {
    try {
      let url = '/api/v1/cars?';
      for (const [key, value] of Object.entries(payload.query)) {
        url += `&${key}=${value}`;
      }
      const res = await this.$axios.$get(url);

      if (res.status) {
        this.commit('car/setFeaturedCars', res.data.filter((item) => item.type === 'FEATURED'));
        this.commit('car/setNewCars', res.data.filter((item) => item.type === 'NEW'));
        
        return this.commit('car/setCars', res.data);
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },

  async addCarApi({ commit }, payload) {
    try {
      const res = await this.$axios.$post('/api/v1/cars/add', payload);
      return res;
    } catch (error) {
      notify({
        type: 'error',
        message: error.response.data.message,
      });
    }
  },
};
