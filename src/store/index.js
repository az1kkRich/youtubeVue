import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
        state.count--
    },
    zero (state) {
    state.count = 0
    },
  }
})

export default store