export default {
  namespaced: true,
  state: {
    showSettings: true
  },
  getters: {

  },
  mutations: {
    CHANGE_SETTING: (state, { key, newValue }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = newValue
      }
    }
  },
  actions: {
    changeSettingState({ commit }, payload) {
      commit('CHANGE_SETTING', payload)
    }
  }
}