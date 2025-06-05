import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import removeConsole from 'vite-plugin-remove-console';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // 开启 fast refresh，提升开发体验
      fastRefresh: true,
    }),
    checker({
      typescript: true,
      // eslint: {
      //   files: ['./src'],
      //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
      // },
    }),
    removeConsole(),
  ],
  resolve: {
    alias: {
      '@': '/src', // 支持 @ 作为 src 目录别名
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // 支持常用扩展名自动解析
  },
  build: {
    sourcemap: true,
    minify: 'esbuild', // 使用 esbuild 进行压缩，支持更好 tree shaking
    rollupOptions: {
      treeshake: true, // 显式开启 tree shaking
      output: {
        manualChunks: undefined, // 避免不必要的代码分包，提升 tree shaking 效果
      },
    },
    target: 'esnext', // 生成更现代的代码，减小体积
    cssCodeSplit: true, // 启用 CSS 拆分
    assetsInlineLimit: 4096, // 提高小资源内联阈值
  },
  server: {
    sourcemap: true,
    open: true, // 启动开发服务器时自动打开浏览器
    port: 5173, // 指定端口
    strictPort: false, // 端口被占用时直接报错
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
