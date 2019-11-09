/* 对axios的二次封装 */
import axios from 'axios'
import qs from 'qs'


const instance = axios.create({
  baseURL:'/api'
})

/* 请求拦截器 */
instance.interceptors.request.use(config =>{
  if (config.method.toUpperCase ==='POST' && config.data instanceof Object) {
       config.data = qs.stringify(config.data)
  }

  return config
})
/* 响应拦截器 */
instance.interceptors.response.use(
  response=>response.data,
  error=>{
    console.log('error', error.message)
    /* 中断promise链 */
    return new Promise(()=>{})
  }
)

export default instance