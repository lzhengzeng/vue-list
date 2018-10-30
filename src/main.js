import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
Vue.prototype.$http = axios
axios.defaults.baseURL='http://localhost:3000/'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
})
