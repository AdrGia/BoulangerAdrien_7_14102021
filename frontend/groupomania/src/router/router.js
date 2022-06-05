import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Feed from '../views/Feed.vue';

Vue.use(VueRouter);
const mode = 'history';
const routes = [

{

	path: '/Signup',
	name: 'Signup',
	component: Signup
},

{

	path: '/',
	name: 'Login',
	component: Login
},


{
	path: '/Feed',
	name: 'Feed',
	component: Feed
},

];

const router = new VueRouter({
	mode, routes
});

export default router;