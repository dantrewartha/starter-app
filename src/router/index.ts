import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import DefaultLayout from '@/layouts/PageLayout.vue';
import NotFound from '@/pages/NotFound.vue';

const APP_BASE_URL = window.APP_BASE_URL;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/pages/Default.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(APP_BASE_URL),
  routes,
});

export default router;
