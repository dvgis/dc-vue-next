/**
 * @Author: Caven
 * @Date: 2020-11-17 18:35:04
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('@/views') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
