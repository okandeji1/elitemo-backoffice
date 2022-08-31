//@ts-ignore
import enUs from 'ant-design-vue/lib/locale-provider/en_US';

export const state = () => ({
  locale: enUs,
  oddsFormat: 'decimal',
  oddsFormats: ['decimal', 'american', 'fraction'],
  timezone: 'WAT - Lagos',
  timezones: [
    {
      name: 'WAT - Lagos',
    },
  ],
  themes: 'base',
  rightMenu: {
    visible: false,
    mode: 'open-mini',
  },
  settingsMenu: false,
  siteFormat: 'FIXED_WIDTH',
  toggleMenu: false,
  addDealer: false,
  addPost: false,
});

export const getters = {
  getTheme(state) {
    return state.themes;
  },

  locale(state) {
    return state.locale;
  },

  settingsMenu(state) {
    return state.settingsMenu;
  },

 zone(state) {
    return state.timezone;
  },

  timezones(state) {
    return state.timezones;
  },

  getSiteFormat(state) {
    return state.siteFormat;
  },

  getToggleMenu(state) {
    return state.toggleMenu;
  },

  addDealerDrawer(state){
    return state.addDealer;
  },

  addPostDrawer(state){
    return state.addPost;
  },
};

export const mutations = {

  changeTimezone(state, value) {
    return (state.timezone = value);
  },

  setTheme(state, theme) {
    state.themes = theme;
  },

  toggleSiteFormat(state, value) {
    state.siteFormat = value;
  },

  setToggleMenu(state) {
    return state.toggleMenu = !state.toggleMenu;
  },

  toggleAddDealerDrawer(state, value) {
    return (state.addDealer = value);
  },

  toggleAddPostDrawer(state, value) {
    return (state.addPost = value);
  },
};

export const actions = {
  initTheme({ commit }) {
    const lsSettings = JSON.parse(localStorage.getItem('vuex')).settings;
    const cachedTheme = lsSettings.themes ? lsSettings.themes : false;

    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (cachedTheme) commit('setTheme', cachedTheme);
    else if (userPrefersDark) commit('setTheme', 'dark');
    else commit('setTheme', 'base');
  },

  toggleTheme({ commit }, selectedTheme) {
    const lsSettings = JSON.parse(localStorage.getItem('vuex')).settings;

    switch (lsSettings.themes) {
      case 'base':
        commit('setTheme', selectedTheme);
        break;

      default:
        commit('setTheme', selectedTheme);
        break;
    }
  },

  changeSiteFormat({ commit }, payload) {
    commit('toggleSiteFormat', payload);
  },
};
