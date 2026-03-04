import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Century_Education_Consultancy/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})