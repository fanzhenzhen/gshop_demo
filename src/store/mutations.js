import {
  SAVE_ADDRESS,
  SAVE_CATEGROYS
} from './mutation_type'

export default{
   [SAVE_ADDRESS](state,{address}){
     state.address = address
   },
   [SAVE_CATEGROYS](state,{categorys}){
     state.categorys = categorys
   }
}