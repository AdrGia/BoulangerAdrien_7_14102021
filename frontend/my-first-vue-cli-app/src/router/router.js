
import Vue from 'vue';
import VueRtouer from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Profil from '../views/Profil.vue';

Vue.use(VueRouter);
const mode = 'history';
const routes = [
{

	path: '/Signup',
	name: 'Signup',
	component: Signup
},

{

	path: '/Login',
	name: 'Login',
	component: Login
},

{

	path: '/Profil',
	name: 'Profil',
	component: Profil
}


];

const router = new VueRouter({
	routes, mode
});

export default router;