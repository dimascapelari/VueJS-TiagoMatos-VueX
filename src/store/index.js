import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: "Dimas",
      last_name: "Capelari",
      email: "dimas.capelari@gmail.com",
    },
    produtos: {
      camiseta: 10,
      bermuda: 5,
      chinelo: 15
    },
    cart: []
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
      // console.log('storeUser', data)
    },
    prodAtualizado(state, data) {
      state.produtos = data
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
