import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log('env',process.env); 
new Vue({
  render: h => h(App),
}).$mount('#app')
