<template>
  <div class="checkout-container">
    <h2>Checkout</h2>
    <div v-if="cart.length > 0">
      <h3>Items in your cart:</h3>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <p><strong>Total: ${{ totalPrice }}</strong></p>
      <button class="checkout-button" @click="handleCheckout">Pay with Stripe</button>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Checkout',
  data() {
    return {
      stripe: null, // Stripe instance
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
    cart() {
      return this.cartItems;
    },
    totalPrice() {
      return this.cartTotal;
    },
  },
  mounted() {
    console.log("Loading Stripe script dynamically...");

    // Dynamically load the Stripe script and initialize Stripe only when ready
    this.loadStripeScript()
      .then(() => {
        console.log("Stripe script successfully loaded!");
        this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);
        if (this.stripe) {
          console.log("Stripe initialized successfully with the environment key:", this.stripe);
        } else {
          console.error("Stripe initialization failed. Check the environment variable.");
          alert("Unable to initialize Stripe. Please check your configuration.");
        }
      })
      .catch((error) => {
        console.error("Error loading Stripe script:", error);
        alert("Unable to load Stripe. Please check your connection or try again later.");
      });
  },
  methods: {
    loadStripeScript() {
      return new Promise((resolve, reject) => {
        if (window.Stripe) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://js.stripe.com/v3/';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Stripe.js"));
          document.head.appendChild(script);
        }
      });
    },
    handleCheckout() {
      if (!this.stripe) {
        alert("Stripe is not ready yet. Please try again in a moment.");
        console.error("Stripe instance is not initialized yet.");
        return;
      }
      if (this.cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      console.log('Initiating Stripe Checkout with Cart:', this.cart);

      // Replace these with actual Price IDs from your Stripe Dashboard
      const priceMapping = {
        'Seagate Drive 1 TB': 'price_1Q5XITDLrkF9rRuMSD1rXeWL', // Updated Test Mode Price ID for Seagate Drive
        'Rainbow Lamp': 'price_placeholder_1',
        'Vibrant Table': 'price_placeholder_2',
        'Artistic Mug': 'price_placeholder_3'
      };

      // Create line items using the predefined price IDs
      const lineItems = this.cart.map((item) => ({
        price: priceMapping[item.name],
        quantity: 1,
      }));

      // Trigger Stripe checkout
      this.stripe.redirectToCheckout({
        lineItems: lineItems,
        mode: 'payment',
        successUrl: window.location.origin + '/success',
        cancelUrl: window.location.origin + '/cancel',
      }).then((result) => {
        if (result.error) {
          console.error('Stripe Checkout Error:', result.error.message);
          alert(result.error.message);
        }
      });
    },
  },
};
</script>

<style scoped>
.checkout-container {
  margin: 50px auto;
  width: 500px;
  padding: 20px;
  background: #f7f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.checkout-button {
  padding: 10px 20px;
  background-color: #6772e5;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.checkout-button:hover {
  background-color: #5469d4;
}
</style>
