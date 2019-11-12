/* 对axios的二次封装 */
import axios from 'axios'
import qs from 'qs'

import router from '../router'


const instance = axios.create({
  baseURL:'/api'
})

/* 请求拦截器 */
instance.interceptors.request.use(config =>{
  if (config.method.toUpperCase() ==='POST' && config.data instanceof Object) {
       config.data = qs.stringify(config.data)
  }
  const token = localStorage.getItem('token_key');
  if (config.headers.hasToken) {
    if (token) {
      config.headers.authorization = token
    }else{
      throw new Error('没有token，请重新登录！')
    }
  }
  return config
})
/* 响应拦截器 */
instance.interceptors.response.use(
  response=>response.data,
  error=>{
    if (!error.response) {//没有发送请求
      console.log(error.message)
      router.currentRoute.path === '/login' && router.replace('/login')
    }else{//发送了网络请求
      if (error.response.status === 401) {
        console.log('token失效，请重新登录')
        router.currentRoute.path === '/login' && router.replace('/login')
      }else if (error.response.status === 404) {
        console.log('请求资源不存在')
      }else{
        console.log('error', error.message)
      }

    }
  
    /* 中断promise链 */
    return new Promise(()=>{})
  }
)

export default instance