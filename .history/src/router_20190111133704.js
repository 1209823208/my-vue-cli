import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => {
    require.ensure(['./views/Home'], () => {
        resolve(require('./views/Home'))
    })
}
const About=()=>import('./views/About')
Vue.use(Router)
let base =`${process.env.BASE_URL}`
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