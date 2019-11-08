<template>
  <div id="guideContainer">
    <div class="guideItem" :class="{active:$route.path==='/msite'}" @click="pathTo('/msite')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guideItem" :class="{active:$route.path==='/search'}" @click="pathTo('/search')">
     <span>
        <i class="iconfont icon-chazhao"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guideItem" :class="{active:$route.path==='/order'}" @click="pathTo('/order')">
     <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guideItem" :class="{active:$route.path==='/profile'}" @click="pathTo('/profile')">
     <span>
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      pathTo(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
 #guideContainer
  width 100%
  height 50px
  border-top 1px solid #eee
  position fixed
  left 0px
  bottom 0px
  display flex
  .guideItem
    width 25%
    display flex 
    flex-direction column
    text-align center
    background-color #fff
    span 
      i
       font-size 20px 
      &:first-child
        margin  6px 0
    
    &.active
      color $green  
     
   
 
</style>
