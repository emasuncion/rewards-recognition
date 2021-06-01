/* eslint-disable no-shadow, no-param-reassign */
import firebase from 'firebase';

const state = () => ({
  currentStars: 0,
  totalStars: 0,
  error: null,
  user: {
    isAuthenticated: false,
    data: null
  },
  userDetails: [],
  usersList: []
});

const getters = {
  totalStars(state) {
    return state.totalStars;
  },

  user(state) {
    return state.user;
  },

  userDetails(state) {
    return state.userDetails;
  },

  usersList(state) {
    return state.usersList;
  }
};

const mutations = {
  SET_CURRENT_STARS(state, stars) {
    state.currentStars = stars;
  },

  SET_TOTAL_STARS(state, stars) {
    state.totalStars = stars;
  },

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
  },

  SET_USERS_LIST(state, usersList) {
    state.usersList = usersList;
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

  async fetchUserDetails({
    state, commit, dispatch
  }) {
    commit('SET_ERROR', null);

    const {email} = state.user.data;

    const userDetailRef = this.$fire.firestore.collection('users').doc(email);

    try {
      const snapshot = await userDetailRef.get();
      const doc = snapshot.data();

      if (!snapshot.exists) {
        throw new Error('Document does not exist');
      }

      dispatch('getUsers');

      commit('SET_USER_DETAILS', doc.value);
      commit('SET_CURRENT_STARS', doc.currentStars);
      commit('SET_TOTAL_STARS', doc.value.length);
    } catch (err) {
      commit('SET_ERROR', err.message);
    }
  },

  async getUsers({commit, dispatch}) {
    commit('SET_ERROR', null);

    const usersRef = this.$fire.firestore.collection('users').doc('list');

    try {
      const snapshot = await usersRef.get();

      if (!snapshot.exists) {
        throw new Error('Document does not exist');
      }

      dispatch('saveUser', usersRef);
    } catch (err) {
      commit('SET_ERROR', err.message);
    }
  },

  async saveUser({state, commit}, usersRef) {
    commit('SET_ERROR', null);

    const data = {
      isAdmin: false,
      name: state.user.data.displayName,
      email: state.user.data.email
    };

    let snapshot = await usersRef.get();
    if (!snapshot.exists) {
      throw new Error('Document does not exist');
    }
    let doc = snapshot.data();

    try {
      doc.value.forEach(async val => {
        if (val.email !== state.user.data.email) {
          await usersRef.update({value: firebase.firestore.FieldValue.arrayUnion(data)});
        }
      });

      snapshot = await usersRef.get();
      doc = snapshot.data();
      commit('SET_USERS_LIST', doc.value);
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
