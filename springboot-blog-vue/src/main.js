import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'

// 设置反向代理，前端请求默认发送到 http://localhost:8081/api
var axios = require('axios')
//本地测试
axios.defaults.baseURL = 'http://localhost:8081/api'
//服务器使用
//axios.defaults.baseURL = 'http://ip地址:8081/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.use(ElementUI);

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.component("mavon-editor", mavonEditor);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
