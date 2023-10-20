/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/test-setup.ts',
    css: false,
  },
  css:{
    modules:{
      generateScopedName(name, filename, css) {
        let file = filename.split("/").pop().split(".")[0]
        return `${file}_${name}`;
      },
    }
  }
})
