import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: '', 
    manifest: true, 
  },

  plugins: [react(), Inspect()],
})
