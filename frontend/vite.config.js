// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Optimize build size and speed
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'react-icons', 'framer-motion'],
          'payment-vendor': ['@stripe/react-stripe-js', '@stripe/stripe-js'],
          'utils': ['axios', 'jwt-decode', 'xlsx', 'jspdf', 'jspdf-autotable'],
        },
      },
    },
    // Optimize for Vercel deployment
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Set optimal chunk size
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
  server: {
    // Optimize dev server
    middlewareMode: false,
  },
})