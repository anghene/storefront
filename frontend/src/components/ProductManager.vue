<template>
  <div class="product-manager">
    <h2>Product Management</h2>
    <form @submit.prevent="saveProduct">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="product.title" required />
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input type="number" v-model="product.price" required />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="product.description" required></textarea>
      </div>
      <div class="form-group">
        <label>Price ID (Stripe):</label>
        <input type="text" v-model="product.priceId" required />
      </div>
      <div class="form-group">
        <label>Category:</label>
        <input type="text" v-model="product.category" required />
      </div>
      <button type="submit" class="save-button">Save Product</button>
    </form>

    <h3>Existing Products</h3>
    <ul>
      <li v-for="prod in products" :key="prod._id">
        {{ prod.title }} - {{ prod.price }} - {{ prod.category }}
        <button @click="editProduct(prod)">Edit</button>
        <button @click="deleteProduct(prod._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductManager',
  data() {
    return {
      products: [],
      product: {
        title: "",
        price: "",
        description: "",
        priceId: "",
        category: ""
      }
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("https://localhost:5656/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    saveProduct() {
      const url = this.product._id ? `https://localhost:5656/products/${this.product._id}` : "https://localhost:5656/products";
      const method = this.product._id ? "PUT" : "POST";

      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.product),
      })
        .then(() => {
          this.fetchProducts();
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error saving product:", error);
        });
    },
    editProduct(prod) {
      this.product = { ...prod };
    },
    deleteProduct(id) {
      fetch(`https://localhost:5656/products/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          this.fetchProducts();
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    },
    resetForm() {
      this.product = {
        title: "",
        price: "",
        description: "",
        priceId: "",
        category: "",
      };
    },
  },
};
</script>

<style scoped>
.product-manager {
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.save-button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #3498db;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.save-button:hover {
  background-color: #2980b9;
}
</style>
