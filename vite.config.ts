import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/oauth': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oauth/, "/oauth")
      },
      middlewareMode: 'ssr',
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
