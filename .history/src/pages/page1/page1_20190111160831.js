import Vue from 'vue'
import Page1 from './page1.vue'
import { store } from '../../store/index'
import router from 'vue-router'
new Vue({
    store,
    router,
    render: h => h(Page1)
}).$mount('#page1')