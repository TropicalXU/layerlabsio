import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'

dotenv.config() 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    REACT_APP_SERVICE_ID: process.env.VITE_SERVICE_ID,
    REACT_APP_VITE_TEMPLATE_ID: process.env.VITE_TEMPLATE_ID,
    REACT_APP_VITE_USER_ID: process.env.VITE_USER_ID
  }
})
