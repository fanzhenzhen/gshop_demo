import ajax from './ajax.js'

export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})

export const getCategorys = () => ajax({
  url: '/index_category',
  headers:{
    hasToken:true
  }
})

/*  根据经纬度获取商铺列表 */
export const getShops = (latitude, longitude) => ajax({
  url: '/shops',
  params: {
    latitude,
    longitude
  },
  headers:{
    hasToken:true
  }
})

/* 用户名密码登录 */
export const loginWithPwd = (name, pwd, captcha) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})

/* 手机号码登录 */
export const loginWithPhone = (phone,code) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

/* 获取手机验证码 */
export const sendCode = (phone)=>ajax({
  url:'/sendcode',
  params:{
    phone
  }
})

/* 自动登录 */
export const autoLogin = ()=>ajax({
  url:'/auto_login',
  headers:{
    hasToken:true
  }
})

/* 获取shop数据 */
export const getShopDatas = ()=>ajax({
  url:'/shopdatas'
})