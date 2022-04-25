<!--模板，html结构 -->
<template>
  <div id="app">
    <app-header></app-header>
    <!-- 根标签，有且只有一个，不能将内容写在标签之外 -->
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!--行为，处理逻辑 -->
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return{
      title:"vue练习"
    }
  },
  components:{
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!--样式，解决样式 -->
<style scoped>
/* scoped定义局部样式 */
  h1{
    color:red;
  }
</style>
