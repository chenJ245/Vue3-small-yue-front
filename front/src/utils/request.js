import axios from 'axios'
import store from '@/store'

const service = axios.create({
  // 根据项目的状态，自动切换请求的服务地址
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // return 出的对象，就是请求的配置对象
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * 响应拦截器:
 * 服务段返回数据之后，前端 .then  之前被调用
 */
service.interceptors.response.use((response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    }
    // TODO: 业务请求错误
    return Promise.reject(new Error(message))
  },
  (error) => {
    // 处理 token 超时
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // 退出
      store.dispatch('user/logout')
    }
    return Promise.reject(error)
  }
)

export default service
