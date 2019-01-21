import Vue from 'vue'
import Index from 'index'
import { store } from '../../store/index'
import router from 'vue-router'
new Vue({
    store,
    router,
    render: h => h(Index)
}).$mount('#page1')