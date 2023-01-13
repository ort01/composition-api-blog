import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RefsVSReactive from '../views/RefsVSReactive.vue'
import Refs from '../views/Refs.vue'
import ComputedValues from '../views/ComputedValues.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/refs',
    name: 'Refs',
    component: Refs
  },
  {
    path: '/rvsr',
    name: 'RefsVSReactive',
    component: RefsVSReactive
  },
  {
    path: '/computed',
    name: 'ComputedValues',
    component: ComputedValues
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
