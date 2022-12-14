<template>
  <div class="card">
    {{ product.name }} - {{ product.price }}
    <!-- {{ carrinho }} -->
    <br />
    <button @click="addProduct()">Adicionar</button>
    <button v-if="carrinho.length !== 0" @click="removeProduct()">
      Remover
    </button>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrinho: this.$store.state.cart,
    };
  },
  props: {
    product: Object,
  },
  methods: {
    addProduct() {
      this.$store.commit("addProduct", this.product);
    },
    removeProduct() {
      this.$store.commit("removeProduct", this.product.id);
    },
  },
};
</script>

<style>
.card {
  background-color: bisque;
  padding: 6px;
  margin-bottom: 5px;
}
</style>
