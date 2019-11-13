<template>
  <div>
    Info
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
      computed:{
      ...mapState({
        info:state=>state.shop.shopDatas.info
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

 
</style>
