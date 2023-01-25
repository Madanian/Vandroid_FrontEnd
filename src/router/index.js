import Vue from 'vue'
import VueRouter from 'vue-router'
import ResultAnalysis from '@/views/ResultAnalysis.vue'
import ChooseApp from '@/views/ChooseApp.vue'
import Login from "../views/Login.vue";
import Register from "../views/Signup.vue";
import ForgetPassword from "../views/ForgetPassword.vue";

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
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: ForgetPassword,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
