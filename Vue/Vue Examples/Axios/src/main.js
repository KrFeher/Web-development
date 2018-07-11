import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import router from './router'
import store from './store'

Axios.defaults.baseURL = 'https://httpexample-8d61e.firebaseio.com';
Axios.interceptors.request.use(req => {
  console.log('REQUEST',req);
  return req; //always return something
})
Axios.interceptors.response.use(res => {
  console.log('RESPONSE',res);
  return res; //always return something
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
