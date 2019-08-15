import router from '@/router'
import store from '@/store'
import util from '@/utils'

router.beforeEach((to, from, next) => {
  if (!store.state.user.userInfo) {
    store.dispatch('user/changeUserState', {
      key: 'userInfo',
      newValue: util.getCookie('userInfo') || {}
    })
  }
  next();
})