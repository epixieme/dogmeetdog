import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// vite config needs to be set to allow absolute imports
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  }
  
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/tests/setup.js',
  //   // dangerouslyIgnoreUnhandledErrors: true

  // },
})
