import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('../views/Home')),'page1-home')
const Home = r => require.ensure([], () => r(require('../views/About')),'page1-about')

// const About=()=>import(/* webpackChunkName:'About'*/'../views/About')
Vue.use(Router)
let base =`${process.env.BASE_URL}`+'page1'
export default new Router({
    mode:'history',
    base:base,
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/about',
            name:'about',
            component:About
        }
    ]
})