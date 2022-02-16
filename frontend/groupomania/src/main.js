import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios';

Vue.config.productionTip = false;

axios.defauts.baseURL = 'http://localhost:3000/api/';
const token = sessionStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
Vue.prototype.$axios = axios;

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
