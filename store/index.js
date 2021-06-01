/* eslint-disable no-shadow, no-param-reassign */
const state = () => ({
  error: null,
  user: {
    isAuthenticated: false,
    data: null
  },
  userDetails: []
});

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  SET_LOGGED_IN(state, val) {
    state.user.isAuthenticated = val;
  },

  SET_USER(state, userDetails) {
    state.user.data = userDetails;
  },

  SET_USER_DETAILS(state, userDetails) {
    state.userDetails = userDetails;
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

  async fetchUserDetails({state, commit}) {
    commit('SET_ERROR', null);

    const {email} = state.user.data;

    const userDetailRef = this.$fire.firestore.collection('users').doc(email);

    try {
      const snapshot = await userDetailRef.get();
      const doc = snapshot.data();
      if (!doc) {
        throw new Error('Document does not exist');
      }

      commit('SET_USER_DETAILS', doc.value);
    } catch (err) {
      commit('SET_ERROR', err.message);
    }
  },

  async logout() {
    try {
      await this.$fire.auth.signOut();
      this.$router.push('/login');
    } catch (err) {
      // do nothing for now
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
