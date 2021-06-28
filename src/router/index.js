import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Dashboard from '../views/dashboard/index.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }, {
    path: '/home',
    name: 'home',
    component: Index
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
