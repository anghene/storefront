<template>
  <header class="header">
    <div class="logo">Store</div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" @input="$emit('update-search', searchQuery)" placeholder="Search for products..." />
      <button class="search-button">Search</button>
    </div>
    <nav class="nav-links">
      <button @click="$emit('update-category', 'all')" class="category-button">All</button>
      <button @click="$emit('update-category', 'tech')" class="category-button">Tech</button>
      <button @click="$emit('update-category', 'stuff')" class="category-button">Stuff</button>
      <button @click="$emit('toggle-cart')" class="cart-button">Cart ({{ cart.length }})</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['cart'],
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f39c12;
  padding: 15px 30px;
  color: #fff;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar input {
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 300px;
}
.search-button {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.search-button:hover {
  background-color: #1f6393;
}
.nav-links {
  display: flex;
  align-items: center;
}
.nav-links button {
  margin: 0 10px;
  background: #34495e;
  border: none;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background 0.3s ease;
}
.nav-links button:hover {
  background: #2c3e50;
}
.cart-button {
  margin-left: 15px;
  background: #27ae60;
  border: none;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  transition: background 0.3s ease;
}
.cart-button:hover {
  background: #1e8449;
}
</style>
