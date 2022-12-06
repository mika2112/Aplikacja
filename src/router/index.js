import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/drinks',
    name: 'drinks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/testDrink',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/TestView.vue')
  },
  {
    path: '/mojito',
    name: 'mojito',
    component: () => import(/* webpackChunkName: "mojito" */ '../views/MojitoView.vue')
  },
  {
    path: '/longIsland',
    name: 'longIsland',
    component: () => import(/* webpackChunkName: "longIsland" */ '../views/LongIslandView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
