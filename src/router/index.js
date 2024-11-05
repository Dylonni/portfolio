import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
    }
  ],
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
