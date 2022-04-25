<template>
  <div class="users">
    <!-- 遍历数组 -->
    <h1>hello users vue</h1>
    <ul>
      <!-- 添加点击事件 -->
      <li v-for="(user,index) in users" :key="index" @click="user.show = !user.show">
        <h2>{{username}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"Users",
    data(){
      return{
        users:[
          {name:"H",position:"web应用开发",show:false},
          {name:"G",position:"web应用开发",show:false},
          {name:"F",position:"web应用开发",show:false},
          {name:"D",position:"web应用开发",show:false},
        ]
      }
    }
  }
</script>
<style scoped>
h1{
  color:orange;
}
.users{
  width:100%;
  max-width:1200px;
  margin:20px auto;
  padding:0 20px;
  box-sizing: border-box;
}
.users ul{
   display: flex;/*设置为弹性布局 */
   /* flex-wrap属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向
   wrap规定灵活的项目在必要的时候拆行或拆列 */
   flex-wrap:wrap;
   list-style-type:none;
   padding:0px;
}
.users ul li{
  flex-grow:1;/*flex-grow属性用于设置或检索弹性盒子的扩展比率 */
  flex-basis:200px;
  text-align:center;
  padding:30px;
  border:1px solid grey;
  margin:10px;
}
</style>
