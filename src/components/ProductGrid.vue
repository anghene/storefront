<template>
  <div class="product-grid">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      @add-to-cart="$emit('add-to-cart', product)"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductGrid',
  components: {
    ProductCard,
  },
  props: ['products', 'searchTerm', 'category'],
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return (
          (this.category === 'all' || product.category === this.category) &&
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px;
}
</style>
