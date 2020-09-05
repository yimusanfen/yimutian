import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局引入axios
import axios from 'axios'
Vue.prototype.axios=axios
//全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



//模拟数据
require("./mock/index.js")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
