import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

/**
 * this.$store.state // 得到 store.state
 * computed(){ ...mapState('user', ['isLogin', 'userInfo']) }
 * methods(){ ...mapActions('user', ['changeState']) }
 */
export default new Vuex.Store({
  modules: {
    user, setting
  }
})