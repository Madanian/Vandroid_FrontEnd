import Vue from 'vue'
import VueRouter from 'vue-router'
import ResultAnalysis from '@/views/ResultAnalysis.vue'
import ChooseApp from '@/views/ChooseApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app-analysis',
    name: 'resultAnalysis',
    component: ResultAnalysis
  },
  {
    path: '/choose-app',
    name: 'chooseApp',
    component: ChooseApp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
