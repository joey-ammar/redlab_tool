import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../components/Home/Home.vue')
    },
    {
      path: "/settings",
      name: 'settings',
      component: import('../components/Settings/Settings.vue')
    }
  ]
})

export default router