import { createRouter, createWebHistory } from 'vue-router'
import Primary from '@/views/Primary.vue'

const routes = [
  {
    path: '/',
    name: 'Primary',
    component: Primary,
  },
  {
    path: '/full-screen',
    name: 'FullScreen',
    component: () => import('@/views/FullScreen.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
