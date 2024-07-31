import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ZrhUiLibrary',
      formats: ['es'],
      fileName: (format) => `zrh-ui-library.${format}.js` // 指定打包后文件名
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    },
    assetsDir: 'dist',
    cssCodeSplit: true
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
})
