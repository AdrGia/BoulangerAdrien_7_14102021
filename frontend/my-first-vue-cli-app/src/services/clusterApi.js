
import axios from 'axios';

axios.defauts.baseURL = 'http://localhost:3000/api/';
const token = sessionStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
Vue.prototype.$axios = axios;

