import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      devMode: false,
      userId: '',
    };
  },
  mutations: {
    swithDevMode(state) {
      state.devMode = !state.devMode;
    },
    switchUser(state, payload) {
      state.userId = payload;
    },
  },
});

export default store;
