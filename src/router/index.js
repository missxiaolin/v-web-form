import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/index.vue'
import Dashboard from '../views/dashboard/index.vue';
import Edit from '../views/edit/index';
import Intro from '../views/intro/index';

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
  }, {
    path: '/edit',
    name: 'edit',
    component: Edit
  }, {
    path: '/:pathMatch(.*)*',
    name: 'intro',
    component: Intro
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router