// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your route components
import Home from '@/components/AppMain.vue'          // or wherever your default view lives
import LocationQuest from '@/components/locationQuest.vue'
import UploadQuest from '@/components/uploadQuest.vue'
import ViewQuest from '@/components/viewQuest.vue'
// Add more as needed...

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/location-quest',
    name: 'location-quest',
    component: LocationQuest
  },
  {
    path: '/upload-quest',
    name: 'upload-quest',
    component: UploadQuest
  },
  {
    path: '/view-quest/:id?',   // optional :id param if viewing specific quest
    name: 'view-quest',
    component: ViewQuest
  },
  // Add a catch-all for 404 if you want
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),          // clean URLs (recommended for Vite)
  // history: createWebHashHistory(),   // fallback if no server config
  routes
})

export default router; 