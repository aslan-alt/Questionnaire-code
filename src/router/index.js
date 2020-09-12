import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/answerSheet',
    name: 'AnswerSheet',

    component: () => import(/* webpackChunkName: "about" */ '../views/AnswerSheet.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "about" */ '../views/Result.vue')
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
