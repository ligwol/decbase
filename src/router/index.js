import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home-admin',
    name: 'HomeAdmin',
    component: () => import('../views/Admin/HomeAdmin.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/about-admin',
    name: 'AboutAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/AboutAdmin.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project-admin',
    name: 'ProjectAdmin',
    component: () => import('../views/Admin/ProjectAdmin.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/services-admin',
    name: 'ServicesAdmin',
    component: () => import('../views/Admin/ServicesAdmin.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog-admin',
    name: 'BlogAdmin',
    component: () => import('../views/Admin/BlogAdmin.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop-admin',
    name: 'ShopAdmin',
    component: () => import('../views/Admin/ShopAdmin.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/contact-admin',
    name: 'ContactAdmin',
    component: () => import('../views/Admin/ContactAdmin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Authorization/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/Authorization/SignUp.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/Authorization/ResetPassword.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Authorization/Account.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
