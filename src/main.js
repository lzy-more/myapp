import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store' // 引入store
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
