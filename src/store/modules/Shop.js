import {
  SAVE_SHOPDATAS,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT
} from '../mutation_type'
import Vue from 'vue'
import {getShopDatas} from '../../api'

const state = {
  shopDatas:{}
}
const mutations ={
 [SAVE_SHOPDATAS](state,{shopDatas}){
   state.shopDatas = shopDatas
 },
 [ADD_FOOD_COUNT](state,{food}){
   if (food.count) {
     food.count++
   }else{
    Vue.set(food,'count',1)
   }
 
 },
 [DEL_FOOD_COUNT](state,{food}){
   if (food.count) {
    food.count--   
   }
 }
}
const actions = {
  async getShopDatasAction ({commit}){
   let result = await getShopDatas()
   if (result.code===0) {
     commit(SAVE_SHOPDATAS,{shopDatas:result.data})
   }
  }

}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}