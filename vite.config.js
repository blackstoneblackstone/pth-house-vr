import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: 'src',
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    // 复制静态资源目录到构建输出目录
    viteStaticCopy({
      targets: [
        {
          src: 'tiles/**/*',
          dest: 'tiles'
        },
        {
          src: 'img/**/*',
          dest: 'img'
        },
        {
          src: 'vendor/**/*',
          dest: 'vendor'
        },
        {
          src: 'data.js',
          dest: '.'
        },
        {
          src: 'index.js',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // 确保所有静态资源都被正确复制
    assetsDir: 'assets',
    // 对于纯 HTML/JS/CSS 项目，不需要代码分割
    rollupOptions: {
      output: {
        // 保持资源文件结构
        assetFileNames: (assetInfo) => {
          // CSS 文件放在 assets 目录
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          // JS 文件放在 assets 目录
          if (assetInfo.name && assetInfo.name.endsWith('.js')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})

