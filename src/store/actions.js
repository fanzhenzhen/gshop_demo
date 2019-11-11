import {
  SAVE_ADDRESS,
  SAVE_CATEGROYS,
  SAVE_SHOPS
} from './mutation_type'
import {
  getAddress,
  getCategorys,
  getShops
  } from '../api'

export default{
  async getAddressAction({commit}){
    let result = await getAddress(40.10038,116.36867)
    if (result.code===0) {
      commit(SAVE_ADDRESS,{address:result.data})
    }
  },
  async getCategorysAction({commit},fn){
    let result  = await getCategorys()
    if (result.code===0) {
      commit(SAVE_CATEGROYS,{categorys:result.data})
      fn()
    }
  },
  async getShopsAction({commit, state}){
    let result = await getShops(state.latitude, state.longitude)
    if(result.code === 0){
      commit(SAVE_SHOPS, {shops: result.data})
    }
  }
}