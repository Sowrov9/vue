

import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router'
import Customer from '@/pages/Customer.vue';



const routes = [
  { path: '/', component: Dashboard },
  {path: '/customer', component: Customer },

  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;