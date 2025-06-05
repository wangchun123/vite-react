import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import removeConsole from 'vite-plugin-remove-console';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      // eslint: {
      //   files: ['./src'],
      //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
      // },
    }),
    removeConsole(),
  ],
  build: {
    sourcemap: true,
    minify: 'esbuild', // 使用 esbuild 进行压缩，支持更好 tree shaking
    rollupOptions: {
      treeshake: true, // 显式开启 tree shaking
      output: {
        manualChunks: undefined, // 避免不必要的代码分包，提升 tree shaking 效果
      },
    },
  },
  server: {
    sourcemap: true,
  },
})
