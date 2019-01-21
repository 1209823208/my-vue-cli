import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('./views/Home');
const About=()=>import('./views/About')
Vue.use(Router)
let bash =`${process.env.BASE_URL}`
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