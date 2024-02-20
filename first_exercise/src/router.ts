import ActorList from './components/ActorList.vue'
import ActorDetails from './components/ActorDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: ActorList 
    },
    { 
      name: 'details',
      path: '/details/:id?', 
      component: ActorDetails
    },
  ]
})

export default router