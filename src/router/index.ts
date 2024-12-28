import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/experience/:slug',
      name: 'experience detail',
      component: () => import('../views/ExperienceDetailView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'projects detail',
      component: () => import('../views/ProjectsDetailView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
    },
  ],
})

export default router
