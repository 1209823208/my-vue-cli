import Vue from 'vue'
import Index from './index.vue'
import store from '@src/store/index'
import router from './router'
new Vue({
  store,
  router,
  render: h => h(Index)
}).$mount('#app')