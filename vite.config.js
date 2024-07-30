import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ZrhUiLibrary',
      formats: ['es'],
      fileName: (format) => `zrh-ui-library.${format}.js`, // 指定打包后文件名
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
    cssCodeSplit: true,
  },
});
