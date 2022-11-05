import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 指定 symbolId 格式
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }, // 用户代理
  server: {
    proxy: {
      // 代理所有 /api 的请求
      '/api': {
        target:
          'https://www.fastmock.site/mock/696ced5090fd055341fc9bc679ca5af1', // 跨域
        changeOrigin: true
      }
    }
  }
})
