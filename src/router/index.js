import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'TaskList',
    meta: {layout: 'mainLayout'},
    component: () => import('@/views/TaskList.vue'),
  },
  {
    path: '/CreateTask',
    name: 'CreateTask',
    meta: {layout: 'mainLayout'},
    component: () => import('@/views/CreateTask.vue'),
  },
  {
    path: '/timer/:id',
    name: 'Timer',
    meta: {layout: 'Empty'},
    component: () => import('@/views/Timer.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
