import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//npm run dev/
export default defineConfig({
  server:{
    port:3000,
  },
  plugins: [react()],
})
