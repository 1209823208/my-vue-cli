import Vue from 'vue'
import Index from './index.vue'
import store from '@/store/index'
import router from './router'
import entryConfig from '_lib/entryConfig'
import MyLoadingPlugin from '_plugins/loading/loading.js'

Vue.use(MyLoadingPlugin);
entryConfig(Vue)
new Vue({
  store,
  router,
  render: h => h(Index)
}).$mount('#app')
