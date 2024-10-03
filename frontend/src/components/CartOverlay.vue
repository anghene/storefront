<template>
  <div class="cart-overlay" v-if="isOpen">
    <div class="cart-header">
      <h2>Shopping Cart</h2>
      <button class="close-btn" @click="$emit('close-cart')">Close</button>
    </div>
    <div class="cart-items" v-if="cart.length > 0">
      <div class="cart-item" v-for="(item, index) in cart" :key="index">
        <img :src="item.image" alt="item.name" class="cart-image" />
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price }}</p>
          <button @click="$emit('remove-item', index)" class="remove-btn">Remove</button>
        </div>
      </div>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
export default {
  name: 'CartOverlay',
  props: ['cart', 'isOpen'],
};
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #ecf0f1;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-header h2 {
  margin: 0;
}
.close-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
.cart-items {
  margin-top: 20px;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.cart-image {
  width: 50px;
  height: auto;
  margin-right: 15px;
}
.item-details {
  display: flex;
  flex-direction: column;
}
.remove-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
.remove-btn:hover {
  background: #c0392b;
}
</style>
