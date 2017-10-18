
console.log(process.env); // 存在
console.log(VERSION); // 存在
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//如果不使用相对路径或者绝对路径，node默认会去node_modules/文件夹下去找，例如：
import FastClick from 'fastclick'//移动端快速点击
import VueRouter from 'vue-router'
import App from './App' //export default 挂载点app
import Vuex from 'vuex'
//export declare function sync
import { sync } from 'vuex-router-sync'  // 只能这么引入sync
import routes from './router/index'
/// export default 一个数组
Vue.use(Vuex)  //分项引入不然会试做为filter
Vue.use(VueRouter) //在启动页面启用vue 路由 
//ajax
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
///使用axios
const store = new Vuex.Store({
  state: {
    appOptions: {
      showHeader: true
    }
  },
  mutations: {
    setDefaultHeader(state, payload) {
      state.appOptions.showHeader = payload.boolean;
    }
  }
})


const router = new VueRouter({
  mode: 'history',
  routes,
  //  scrollBehavior (to, from, savedPosition) {
  //     // 如果你的連結是帶 # 這種
  //     // to.hash 就會有值(值就是連結)
  //     // 例如 #3
  //     if (to.hash) {
  //       return {
  //         // 這個是透過 to.hash 的值來找到對應的元素
  //         // 照你的 html 來看是不用多加處理這樣就可以了
  //         // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
  //         selector: to.hash
  //       }
  //     }
  //   }
})

FastClick.attach(document.body)  //快速点击

Vue.config.productionTip = true; //vue 生产环境的提示


sync(store, router)//
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')  //通过index.html的app-box 启动的 相当于这个是启动页面


