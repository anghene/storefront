import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    clearCart(state) {
      state.cart = [];
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    },
    cartItems(state) {
      return state.cart;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  },
});
