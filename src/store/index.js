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
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  mutations: {
    //commit

    storeUser(state, data) {
      state.user = data
      // console.log('storeUser', data)
    },
    prodAtualizado(state, data) {
      state.produtos = data
    },
    addProduct(state, data) {
      state.cart.push(data)
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex(objeto => objeto.id === id)
      state.cart.splice(index, 1)
    }
  },
  getters: {
    total(state) {
      // dependencia
      // retornar um valor
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  actions: {
    //dispatch

    // storeUser(context, data) {
    storeUser(context, data) {
      // console.log(context, data)
      // console.log(context.getters.total)

      // context.state.user = data

      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('storeUser', data)
          resolve()
          // console.log('here')
        }, 3000)
      })
    }
  },
  modules: {
  }
})
