<template>
  <div id="app">
    <div class="container"> <!-- Re-added the container div -->
      <Header :cart="cart" @update-search="updateSearch" @toggle-cart="toggleCart" @update-category="updateCategory" />
      <router-view /> <!-- This will display the routed component -->
      <CartOverlay :cart="cart" :isOpen="isCartOpen" @close-cart="toggleCart" @remove-item="removeItem" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CartOverlay from './components/CartOverlay.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CartOverlay,
  },
  computed: {
    ...mapGetters(['cartItems']),
    cart() {
      return this.cartItems;
    },
  },
  data() {
    return {
      isCartOpen: false,
    };
  },
  methods: {
    ...mapActions(['removeFromCart']),
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    removeItem(index) {
      this.removeFromCart(index);
    },
  },
};
</script>

<style>
#app { font-family: 'Avenir', Helvetica, Arial, sans-serif; color: #2c3e50; display: flex; justify-content: center; padding: 20px; }
.container { max-width: 1200px; width: 100%; background-color: #ffffff; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 20px; }
</style>
