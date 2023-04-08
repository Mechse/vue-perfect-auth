import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es", "cjs"],
      fileName: (format) => `vue-perfect-auth.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        exports: "named"
      }
    }
  }
})
