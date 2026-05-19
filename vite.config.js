import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [
      (req, res, next) => {
        // Redirige las peticiones de favicon al PNG del balón
        if (req.url === '/favicon.ico') {
          res.writeHead(302, { 'Location': '/icon-192x192.png' })
          res.end()
          return
        }
        next()
      }
    ]
  }
})
