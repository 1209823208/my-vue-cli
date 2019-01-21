import Vue from 'vue'
import App from './page2.vue'
import router from './router'
import store from '@/store/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
