import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import clusterApi from '../services/clusterApi';
import Buefy from 'buefy'

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
