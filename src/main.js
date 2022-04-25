// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 通过npm将vue下载下来
import App from './App'
// 引入，并实例化对象
import Users from './components/Users.vue'

Vue.config.productionTip = false

//全局注册组件
Vue.component('users',Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
