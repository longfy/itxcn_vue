import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import util from '@/utils'
import '@/router/permission'
import './plugins/element.js'
import '@/styles/index.less'

Vue.config.productionTip = false

Vue.prototype.util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
