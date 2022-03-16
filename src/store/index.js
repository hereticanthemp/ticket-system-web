import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      devMode: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    swithDevMode(state){
        state.devMode = !state.devMode
    }
  }
})

export default store;