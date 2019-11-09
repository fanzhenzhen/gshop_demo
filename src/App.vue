<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'app',
  components:{
    FooterGuide  
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" >

</style>
