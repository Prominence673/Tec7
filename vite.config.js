import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/model/AI': 'http://127.0.0.1:5000',
      '/api': {
        target: 'http://localhost/Tec7/api', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  }
});