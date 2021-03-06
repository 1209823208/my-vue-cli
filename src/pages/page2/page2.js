import Vue from 'vue'
import App from './page2.vue'
import router from './router'
import store from '@/store/'
import entryConfig from '_lib/entryConfig'
entryConfig(Vue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
