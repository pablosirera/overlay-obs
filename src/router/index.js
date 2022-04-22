import { createRouter, createWebHashHistory } from 'vue-router'
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
  {
    path: '/full-screen-rectangle',
    name: 'FullScreenRectangle',
    component: () => import('@/views/FullScreenRectangle.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
