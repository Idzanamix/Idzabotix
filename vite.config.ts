import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    host: 'https://toolkinamix.ru',
    port: 80,
    proxy: {
      '/login': 'https://github.com/',
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
