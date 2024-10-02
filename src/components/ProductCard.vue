<template>
  <div class="product-card">
    <img :src="product.image" alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p class="price">${{ product.price }}</p>
    <button @click="$emit('add-to-cart', product)" class="add-to-cart-btn">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
};
</script>

<style scoped>
.product-card {
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.price {
  color: #27ae60;
  font-weight: bold;
}
.add-to-cart-btn {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.add-to-cart-btn:hover {
  background-color: #c0392b;
}
</style>
