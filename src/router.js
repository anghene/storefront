import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main.vue';
import Checkout from './components/Checkout.vue';
import Success from './components/Success.vue';
import ProductManager from './components/ProductManager.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Main }, // Default route
    { path: '/checkout', component: Checkout },
    { path: '/success', component: Success }, // Success route
    { path: '/admin/products', component: ProductManager } // Product management route
  ],
});
