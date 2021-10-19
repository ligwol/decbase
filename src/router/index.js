import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
