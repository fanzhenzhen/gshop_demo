import {
  SAVE_ADDRESS,
  SAVE_CATEGROYS,
  SAVE_SHOPS,
  SAVE_TOKEN,
  SAVE_USER,
  LOGOUT
} from './mutation_type'

export default{
   [SAVE_ADDRESS](state,{address}){
     state.address = address
   },
   [SAVE_CATEGROYS](state,{categorys}){
     state.categorys = categorys
   },
   [SAVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [SAVE_USER](state, {user}){
    state.user = user
  },
  [SAVE_TOKEN](state, {token}){
    localStorage.setItem('token_key',token)
    state.token = token
  },
  [LOGOUT](state){
    state.user = {}
    state.token = ''
    localStorage.removeItem('token_key')
  }
  
}