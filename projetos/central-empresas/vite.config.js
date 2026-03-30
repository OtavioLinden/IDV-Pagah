import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/chatwoot': {
        target: 'https://chatwoot.levezaativa.site',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/chatwoot/, '')
      },
      '/api/waha': {
        target: 'https://waha-pagah.levezaativa.site',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/waha/, '')
      }
    }
  }
})
