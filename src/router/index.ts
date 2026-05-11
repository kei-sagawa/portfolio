import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import TeaView from '../views/tea/TeaView.vue'
import TeaGalleryView from '../views/tea/TeaGalleryView.vue'
import WorksView from '../views/works/WorksView.vue'
import ThoughtsView from '../views/thoughts/ThoughtsView.vue'
import AboutView from '../views/about/AboutView.vue'
import WebDesignView from '../views/web-design/WebDesignView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tea',
      name: 'tea',
      component: TeaView,
    },
    {
      path: '/tea/gallery',
      name: 'tea-gallery',
      component: TeaGalleryView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
    },
    {
      path: '/web-design',
      name: 'web-design',
      component: WebDesignView,
    },
    {
      path: '/thoughts',
      name: 'thoughts',
      component: ThoughtsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
