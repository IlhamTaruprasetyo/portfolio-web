import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-scroll', 'react-countup'],
    base: proccess.env.VITE_BASE_PATH || "/portfolio-web",
  }
})
