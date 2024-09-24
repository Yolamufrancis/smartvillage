import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'https://smartvillageshub.com/backend': {
        target: 'https://api.smartvillageshub.com/api/',
        secure: false,
      }
    }
  },
  plugins: [react()]
})
