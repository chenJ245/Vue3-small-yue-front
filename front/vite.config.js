import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理配置
  server: {
    proxy: {
      // 代理所有 /api 的请求
      '/api': {
        // 代理请求之后的请求地址
        target:
          'https://www.fastmock.site/mock/696ced5090fd055341fc9bc679ca5af1',
        // 跨域 fastmock 接口自带后端跨域
        changeOrigin: true
      }
    }
  }
})
