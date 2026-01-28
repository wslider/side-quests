import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'



export default defineConfig({
  base: '/side-quests/',  // ← repo name for GitHub Pages deployment 

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

/* Refferences Vue and Vite config:
- https://vuejs.org/guide/scaling-up/tooling.html#vite
-  https://vitejs.dev/config/ */