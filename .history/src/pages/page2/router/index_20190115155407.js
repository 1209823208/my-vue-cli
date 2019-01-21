import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = r => require.ensure([], () => r(require('../views/Home')),'page2-home')

Vue.use(Router)

let base = `${process.env.BASE_URL}` + 'page2'

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
