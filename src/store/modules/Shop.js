import {
  SAVE_SHOPDATAS,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT,
  SAVE_CARTSHOPS,
  CLEAR_CARTSHOPS
} from '../mutation_type'
import Vue from 'vue'
import {getShopDatas} from '../../api'

const state = {
  shopDatas:{},
  shopCarts:[]
}
const mutations ={
 [SAVE_SHOPDATAS](state,{shopDatas}){
   state.shopDatas = shopDatas
 },
 [SAVE_CARTSHOPS](state,{shopCarts}){
  state.shopCarts = shopCarts
 },
[CLEAR_CARTSHOPS](state){
  state.shopCarts.forEach(food =>food.count = 0);
  state.shopCarts = []
},
 [ADD_FOOD_COUNT](state,{food}){
   if (food.count) {
     food.count++
   }else{
    Vue.set(food,'count',1)
    /* 添加至购物车数组中 */
    state.shopCarts.push(food)
   }
 
 },
 [DEL_FOOD_COUNT](state,{food}){
   if (food.count) {
    food.count--  
    /* 如果food的count是0 的话，从购物车删除 */ 
    if (!!!food.count) {
      state.shopCarts.splice(state.shopCarts.indexOf(food),1)
    }
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
  totalCount(state){
   return state.shopCarts.reduce((pre,food)=>{
     return pre += food.count
   },0)
  },
  totalPrice(state){
    return state.shopCarts.reduce((pre,food)=>{
      return pre += food.count * food.price
    },0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}