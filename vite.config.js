import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rv-7immig/',
  build: {
    chunkSizeWarningLimit: 1000,} // en kilo-octets, ici 1000 kB = 1MB
})
