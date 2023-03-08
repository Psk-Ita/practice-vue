import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookDetails from '../components/BookDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookDetails,
      beforeEnter: (to, from, next) => {
        console.log('before enter ', to.name, ' params ', to.params)
        next()
      }
    }
  ]
})

export default router
