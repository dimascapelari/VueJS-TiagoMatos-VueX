import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: "Dimas",
      last_name: "Capelari",
      email: "dimas.capelari@gmail.com",
    },
    products: [],
    cart: []
  },
  mutations: {
    storeUser(state, data) {
      // console.log('storeUser', data)

      state.user = data
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
