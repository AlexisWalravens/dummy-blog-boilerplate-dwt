import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import PostPage from '../pages/PostPage.vue'

const router = createRouter({
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: AboutPage,
      path: '/about'
    },
    {
      component: PostPage,
      path: '/post/:id'
    }
  ],
  history: createWebHistory()
})

export default router
