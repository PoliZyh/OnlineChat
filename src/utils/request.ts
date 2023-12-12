import axios from 'axios'
import useUserStore from '@/store/modules/useUserStore'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，经常给服务器端携带公共参数
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    return response.data
  },
  (error) => {
    // 失败的回调，处理http网络错误
    let message = ''
    console.log(error)
    let status = error.response.status ? error.response.status : 0
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络异常'
    }
    
    return Promise.reject(error)
  },
)

export default request
