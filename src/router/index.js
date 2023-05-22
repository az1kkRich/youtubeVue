import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import VideoDetailView from '../components/Video/VideoDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search/:id',
      name: 'search',
      component: SearchView
    },
    {
      path: '/video/:name',
      name: 'videodetail',
      component: VideoDetailView,
    }
  ]
})

export default router
