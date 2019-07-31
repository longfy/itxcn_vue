export default {
  namespaced: true,
  state: {
    userInfo: null
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    CHANGE_STATE(state, { key, newValue }) {
      if (state.hasOwnProperty(key)) {
        state[key] = newValue;
      }
    }
  },
  actions: {
    changeUserState({ commit }, payload) {
      commit('CHANGE_STATE', payload);
    }
  }
}