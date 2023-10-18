import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('/src/layout/index.vue'),
      children: [
        {
          path: 'table',
          name: 'table',
          component: () => import('/src/views/table.vue'),
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('/src/views/search.vue'),
        },
        {
          path: 'search2',
          name: 'search2',
          component: () => import('/src/views/search2.vue'),
        },
        {
          path: 'work',
          name: 'work',
          component: () => import('/src/views/work.vue'),
        },
      ]
    },
  ]
})

export default router
