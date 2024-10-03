<template>
  <div class="main-content">
    <HeroBanner />
    <ProductGrid :products="products" :searchTerm="searchTerm" :category="selectedCategory" @add-to-cart="addToCart" />
    <button class="checkout-button" @click="goToCheckout">Proceed to Checkout</button>
  </div>
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import ProductGrid from './ProductGrid.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Main',
  components: {
    HeroBanner,
    ProductGrid,
  },
  computed: {
    ...mapGetters(['cartItems']),
    products() {
      return [
        { id: 1, name: 'Seagate Drive 1 TB', image: require('@/assets/seagate-drive.png'), price: 59.99, category: 'tech' },
        { id: 2, name: 'Rainbow Lamp', image: 'https://picsum.photos/200/301', price: 29.99, category: 'stuff' },
        { id: 3, name: 'Vibrant Table', image: 'https://picsum.photos/200/302', price: 89.99, category: 'stuff' },
        { id: 4, name: 'Artistic Mug', image: 'https://picsum.photos/200/303', price: 19.99, category: 'stuff' },
      ];
    },
  },
  data() {
    return {
      searchTerm: "",
      selectedCategory: 'all',
    };
  },
  methods: {
    ...mapActions(['addToCart']),
    goToCheckout() {
      this.$router.push({ path: '/checkout' }).catch((err) => {
        if (err.name !== 'NavigationDuplicated') {
          console.error(err);
        }
      });
    },
  },
};
</script>

<style scoped>
.main-content {
  width: 100%;
}
.checkout-button {
  padding: 15px 30px;
  margin: 20px auto;
  background-color: #27ae60;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: block;
  width: fit-content;
  transition: background 0.3s ease;
}
.checkout-button:hover {
  background-color: #1e8449;
}
</style>
