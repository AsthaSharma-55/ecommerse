<template>
  <h1 style="margin: 22px">Card payment</h1>
  <div>
    <h2 style="margin: 22px">Products</h2>
    <div v-for="item in categoryData" :key="item.id" style="margin: 30px">
      <h6>Name: {{ item.name }}</h6>
      <h6>Description: {{ item.description }}</h6>
      <h6>Price: {{ item.price }}</h6>
      <button class="btn btn-primary" @click="addToCart(item)">
        Add to Cart
      </button>
    </div>
    <hr />
    <h2 style="margin: 22px">Cart</h2>
    <div v-for="(cartItem, index) in cart" :key="index" style="margin: 30px">
      <h6>
        {{ cartItem.product.name }} - ${{ cartItem.product.price }} x
        {{ cartItem.quantity }}
      </h6>
    </div>
    <hr />
    <p style="margin: 30px">Total: ${{ cartTotal }}</p>

    <!-- //stripe payment -->
    <Stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publisablekey"
      :line-items="lineItems"
      :success-url="successUrl"
      :cancel-url="cancelUrl"
      @loading="(v) => (loading = v)"
    />
    <button
      @click="submitPayment"
      class="btn btn-info"
      style="margin-left: 30px"
    >
      pay now
    </button>
    <br />
    <router-link to="/card"
      ><button class="btn btn-success" style="margin: 30px">
        Go back
      </button></router-link
    >
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";

export default {
  data() {
    return {
      publisablekey:
        "pk_test_51MqUDJSFgDnHJDFQ1YqBnESazTN2DwIiX0IdLmgmV9Us0baekxU0qbjVQ2IVEajtNlwrtfOWvIja6NXvOAYDBRqj00luvSDoqK",
      categoryData: [],
      cart: [],
      loading: false,
      lineItems: [
        {
          price: "price_1MqUv9SFgDnHJDFQpulQ4zL4", // this key is also from your account
          quantity: 1,
        },
      ],
      successUrl: "http://127.0.0.1:5173/success",
      cancelUrl: "http://127.0.0.1:5173/cancel",
    };
  },
  components: {
    StripeCheckout,
  },
  methods: {
    submitPayment() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    addToCart(item) {
      console.log("cart", this.cart);
      let cartItem = this.cart.item;
      console.log("cartitem", cartItem);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({
          product: item,
          quantity: 1,
        });
      }
      console.log("cart", this.cart);
    },
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
        0
      );
    },
  },
  async mounted() {
    console.log(this.cart);
    try {
      const response = await axios.get(
        `http://localhost:5000/categories/${this.$route.params.id}`
      );
      this.categoryData = [response.data];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
