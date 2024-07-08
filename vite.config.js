import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Config to include mp4 files during build process and deployment to production 
  assetsInclude: ['**/*.mp4'],
})
