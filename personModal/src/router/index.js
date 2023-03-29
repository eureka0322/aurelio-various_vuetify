import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
