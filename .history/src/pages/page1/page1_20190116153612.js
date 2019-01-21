import Vue from 'vue'
import App from './page1.vue'
import router from './router'
import store from '@/store/'
import entryConfig from '_lib/entryConfig'

entryConfig(Vue)
Vue.config.errorHandler = function (err, vm, info) {
    let { 
        message, // 异常信息
        name, // 异常名称
        stack  // 异常堆栈信息
    } = err;

  console.log('name',name)
  console.log('message',message)
  console.log('stack',stack)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
