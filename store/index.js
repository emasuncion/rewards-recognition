/* eslint-disable no-shadow, no-param-reassign */
const state = () => ({
  isAuthenticated: false,
  user: []
});

const mutations = {
  AUTHENTICATE(state) {
    state.isAuthenticated = !state.isAuthenticated;
  },

  SET_USER(state, userDetails) {
    state.user = userDetails;
  }
};

export default {
  state,
  mutations
};
