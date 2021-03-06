import Vue from 'vue'
import Home from '../views/Home.vue'
import Kviz from '../views/Kviz.vue'
import Kalendar from '../views/Kalendar.vue'
import HeaderStart from '../components/Logovanje/HeaderStart'
import Connecting from '../views/Connecting.vue'
import Start from '../views/Start.vue'
import RangLista from '../views/RangLista'
import Info from '../views/Info'
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/rangLista',
    name: 'RangLista',
    component: RangLista
  },
  {
    path: '/',
    name: 'Welcome',
    component:Start
    
  },
  {
    path: '/info',
    name: 'Informations',
    component:Info
    
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
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Kviz
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
