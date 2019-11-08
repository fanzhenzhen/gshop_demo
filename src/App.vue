<template>
  <div id="app">
    <h1>hello</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
 h1
   font-size 20px
   color red
   

</style>
