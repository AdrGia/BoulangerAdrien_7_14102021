import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios';

Vue.config.productionTip = false;
const token = sessionStorage.getItem('token');
const instanceAxios = axios.create({
	baseURL:'http://localhost:3000/api/',
	headers: {'Authorization': 'Bearer' + token}
});
Vue.prototype.$axios = instanceAxios;

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
