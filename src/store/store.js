import Vue from 'vue';
import Vuex from 'vuex';

const key = 'list-items';

const generateId = () => {
  return Math.random().toString(36).substr(2, 8);
};

const localStorageListPlugin = store => {
  store.subscribe((mutation, { list }) => {
    window.localStorage.setItem(key, JSON.stringify(list));
  });
};

const state = {
  list: JSON.parse(String(localStorage.getItem(key))) || [],
};

const getters = {
  list: state => state.list,
};

const actions = {
  addItem: ({ commit }, data) => commit('addItem', data),
  updateItem: ({ commit }, data) => commit('updateItem', data),
  removeItem: ({ commit }, data) => commit('removeItem', data),
  removeAll: ({ commit }) => commit('removeAll'),
};

const mutations = {
  addItem(state, item) {
    state.list.push({
      id: generateId(),
      name: item.name,
    });
  },
  updateItem(state, item) {
    state.list = state.list.map(value => {
      if (value.id === item.id) return item;
      return value;
    });
  },
  removeItem(state, item) {
    state.list = state.list.filter(value => {
      return value.id !== item.id
    });
  },
  removeAll(state) {
    state.list = [];
  },
};

const plugins = [
  localStorageListPlugin,
];

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
});
