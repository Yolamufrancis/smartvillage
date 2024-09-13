import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests starting with '/api/' to the backend API
      '/api/': {
        target: 'https://api.smartvillageshub.com/api/',
        changeOrigin: true, // Required for CORS handling
        secure: false, // Allow insecure connections for development
      },
    },
  },
  plugins: [react()],
});