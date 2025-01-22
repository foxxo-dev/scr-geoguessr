import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/views/Welcome.vue'),
    },
    {
      path: '/guess',
      name: 'Guess',
      component: () => import('@/views/Guess.vue'),
    },
    {
      path: '/debug',
      name: 'Debug',
      component: () => import('@/views/Debug.vue'),
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('@/views/Result.vue'),
    },
  ],
});

export default router;
