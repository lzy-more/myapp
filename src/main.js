import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store' // 引入store
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import vueCookie from 'vue-cookie'
import http from './httpHelp.js'
Vue.config.productionTip = false
// Vue.config.productionTip = false
Vue.use(ElementUI, vueCookie, axios, http);
Vue.prototype.$axios = axios;
Vue.prototype.$cookie = vueCookie;

//定义请求
Vue.prototype.$post = function (url, data) {
  return axios({
    methods: 'post',
    url: url,
    data: data,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHTTPRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'token': vueCookie.get('token')
    }
  })
}

Vue.prototype.$get = function (url, params) {
  return axios({
    method: 'get',
    url: url,
    params,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHTTPRequest',
      'token': vueCookie.get('token')
    }
  })
}

Vue.prototype.$form = function (url, params) {
  return axios({
    method: 'post',
    url: url,
    params,
    timeout: 30000,
    headers: {
      'Content-type': 'multipart/form-data',
      'token': vueCookie.get('token')
    }
  })
}

//路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { //如果需要跳转 ，往下走（1）
    //判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
    if (to.path === '/login') { //判断下一个路由是否为要验证的路由（3）
      next('/index'); // 如果是直接跳到首页，
    } else { //如果该路由不需要验证，那么直接往后走
      next();
    }

  } else { //不需要跳转，直接往下走
    next();
   
    
  }
});














// router.beforeEach((to, from, next) => {
//   // console.log(store.state.token)
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   const route = ['index', 'list'];
//   let isLogin = vueCookie.get('token')// 是否登录
//   // 未登录状态；当路由到route指定页时，跳转至login
//   if (route.indexOf(to.name) >= 0) {
//     if (isLogin == null) {
//       this.$router.push({ path: '/login', })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   // console.log(to.name)
//   // localStorage.setItem('routerName', to.name)
//   if (to.name === 'login') {
//     if (isLogin != null) {
//       this.$router.push({ path: '/index', })
//     }
//   }
//   next()
// })









new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')