<template>
  <div>
   Rating
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
     computed:{
      ...mapState({
        ratings:state=>state.shop.shopDatas.ratings
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

 
</style>
