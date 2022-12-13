<template>
  <img alt="Vue logo" src="./assets/logo.png" /><br />

  Nome: {{ $store.state.user.first_name }}<br />
  Sobrenome: {{ $store.state.user.last_name }}<br />
  E-mail: {{ $store.state.user.email }}

  <button @click="updateUser()">Atualizar Perfil</button>

  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: "DiMaS",
        last_name: "CaPeLaRi",
        email: "dimas@gmail.com",
      };

      this.$store.commit("storeUser", newUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
