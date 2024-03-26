import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL;
//使用create方法创建axios实例
const Axios = axios.create({
  timeout: 30000, // 请求超时时间
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})
// 添加请求拦截器
Axios.interceptors.request.use((config:any) => {
  // const { Authorization } = userInfoStore
  // config.headers['Authorization'] = Authorization
  return config
})

// 添加响应拦截器
Axios.interceptors.response.use((response: { status: number; data: any })=> {
  // 对响应数据做点什么
  return Object.assign({}, response.data);
}, (error: any) => {
  console.log('Response: error', error)
  const {status} = error.response
  if(status==401 || status == 404){
    // 登录失效--退出登录
  }
  const msg = error.Message !== undefined ? error.Message : ''
  return Promise.reject(error)
})

export default Axios;