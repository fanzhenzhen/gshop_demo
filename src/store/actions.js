import {
  SAVE_ADDRESS,
  SAVE_CATEGROYS
} from './mutation_type'
import {
  getAddress,
  getCategorys
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
  }
}