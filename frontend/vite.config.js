import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // import x from '@/data/resumeData'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // import 'css/pages/resume.css'
      css: fileURLToPath(new URL('./src/assets/stylesheets', import.meta.url)),
    },
  },
})
