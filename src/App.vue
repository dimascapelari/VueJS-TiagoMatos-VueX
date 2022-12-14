<template>
  {{ $store.getters.total }}
  <AppProducts />
  <br />
  <button>Atualizar</button>

  <hr />
  <HelloWorld msg="VueX Mutations" />
  <div>
    Nome: {{ $store.state.user.first_name }}<br />
    Sobrenome: {{ $store.state.user.last_name }}<br />
    E-mail: {{ $store.state.user.email }}<br />
    <button @click="updateUser()">Atualizar Perfil</button>
  </div>
  <hr />
  <div>
    <h3>Produtos Dimas</h3>
    <label>Quantidade </label>
    <input type="text" v-model="camiseta" />
    Camisetas em estoque: {{ $store.state.produtos.camiseta }}<br />
    <label>Quantidade </label>
    <input type="text" v-model="bermuda" />
    Bermudas em estoque: {{ $store.state.produtos.bermuda }}<br />

    <label>Quantidade </label>
    <input type="text" v-model="chinelo" />
    Chinelos em estoque: {{ $store.state.produtos.chinelo }}<br />
    <button @click="atualizaProdutos()">Atualizar Produtos</button>
  </div>

  <hr />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppProducts from "./components/Products/AppProducts.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppProducts,
  },
  data() {
    return {
      camiseta: "",
      bermuda: "",
      chinelo: "",
    };
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: "DiMaS",
        last_name: "CaPeLaRi",
        email: "dimas@gmail.com",
      };
      // this.$store.commit("storeUser", newUser);
      this.$store.dispatch("storeUser", newUser).then(() => {
        console.log("terminou com sucesso");
      });
    },
    atualizaProdutos() {
      const newProd = {
        camiseta: this.camiseta,
        bermuda: this.bermuda,
        chinelo: this.chinelo,
      };
      this.$store.commit("prodAtualizado", newProd);
    },
  },
  mounted() {
    // if (this.camiseta === "") {
    //   // this.camiseta = 0;
    //   this.$store.state.produtos.camiseta = 0;
    // }
    // if (this.camiseta === "") {
    //   this.$store.state.produtos.camiseta = 0;
    // }
  },
};
</script>

<style></style>
