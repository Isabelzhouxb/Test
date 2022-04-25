<template>
  <div class="users">
  <!-- 遍历数组 -->
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(user,index) in users" :key="index">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"Users",
    data(){
      return{
        users:["y","h","a"],
        title:"我的user组件"
      }
    }
  }
</script>
<style scoped>
</style>
