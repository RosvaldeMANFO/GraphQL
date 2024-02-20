import CharacterList from './components/CharacterList.vue'
import CharacterDetails from './components/CharacterDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: CharacterList 
    },
    { 
      name: 'details',
      path: '/details/:id?', 
      component: CharacterDetails
    },
  ]
})

export default router