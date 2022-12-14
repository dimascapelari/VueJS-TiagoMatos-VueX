<template>
  <div>
    <AppProduct
      v-for="(product, index) in $store.state.products"
      :key="index"
      :product="product"
    />

    <pre>{{ $store.state.cart }}</pre>
  </div>
</template>

<script>
import AppProduct from "@/components/Products/AppProduct.vue";

export default {
  components: {
    AppProduct,
  },
};
</script>

<style></style>
