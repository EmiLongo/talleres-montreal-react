// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@img': path.resolve(process.cwd(), './src/assets/img'),
      '@videos': path.resolve(process.cwd(), './src/assets/videos'),
      // '@api': path.resolve(process.cwd(), './src/api'),
      '@components': path.resolve(process.cwd(), './src/components'),
      '@modules': path.resolve(process.cwd(), './src/modules'),
      '@shared': path.resolve(process.cwd(), './src/shared'),
      '@theme': path.resolve(process.cwd(), './src/theme'),
    },
  },
})