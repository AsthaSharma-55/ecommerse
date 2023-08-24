import { createStore } from 'vuex';

export default createStore({
  state: {
    user: localStorage.getItem('user_info'), // Initialize with stored user info
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      // Save the user info to localStorage
      localStorage.setItem('user_info', JSON.stringify(user));
    },
  },
  actions: {
    login({ commit }, user) {
      // Perform login logic here, and then set the user in the store
      commit('setUser', user);
      console.log("userrrrrr",user)

    },
    logout({ commit }) {
      // Perform logout logic here, and then remove the user from the store
      commit('setUser', null);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
