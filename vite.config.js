import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        gray: {
          250: '#d3d3d3', 
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
  
})
