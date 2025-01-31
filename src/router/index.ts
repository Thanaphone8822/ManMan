import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import PaymentView from '@/views/PaymentView.vue'
import ProfileView from '@/views/ProfileView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
