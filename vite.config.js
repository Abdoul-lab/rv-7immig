import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rv-7immig/',
  build: {
    chunkSizeWarningLimit: 1000,
  }
})
