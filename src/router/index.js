import Vue from 'vue'
import Home from '../views/Home.vue'
import Kalendar from '../views/Kalendar.vue'
import Connecting from '../views/Connecting.vue'
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'Kalendar',
    component: Kalendar
  },
  {
    path: '/connecting',
    name: 'Connecting',
    component: Connecting
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
