/* eslint-disable no-shadow, no-param-reassign */
import firebase from 'firebase';

const state = () => ({
  user: {
    isAuthenticated: false,
    data: null
  }
});

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {
  SET_LOGGED_IN(state, val) {
    state.user.isAuthenticated = val;
  },

  SET_USER(state, userDetails) {
    state.user.data = userDetails;
  }
};

const actions = {
  fetchUser({commit}, user) {
    commit('SET_LOGGED_IN', user !== null);

    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      commit('SET_USER', null);
    }
  },

  async logout() {
    try {
      await firebase
        .auth()
        .signOut();
      this.$router.push('/login');
    } catch (err) {
      console.warn(err);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
