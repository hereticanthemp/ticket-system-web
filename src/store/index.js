import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      devMode: false
    }
  },
  mutations: {
    swithDevMode(state){
        state.devMode = !state.devMode
    }
  }
})

export default store;