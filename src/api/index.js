import ajax from './ajax.js'

export const getAddress =( latitude,longitude)=> ajax({
  url:`/position/${latitude},${longitude}`
})

export const getCategorys = ()=>ajax({
  url:'/index_category'
})

/*  根据经纬度获取商铺列表 */
export const getShops = (latitude, longitude) => ajax({
  url: '/shops',
  params: {
    latitude,
    longitude
  }
})