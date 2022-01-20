<template>
	<div id="home">
		<h1>
			<img class="image-logo" alt="Groupomania" src="../assests/icon-above-font.svg"
		</h1>
		<h2>Home</h2>
		<ul>
			<li>
				<router-link to="/1">Login<router-link>
			</li>
			<li>
				<router-link to="/2">Signup<router-link>
			</li>
		</ul>
	</div>

	<div id="login">
		<h2>Login</h2>
		<ul>
			<router-link to="/">Home<router-link>
		</ul>
	</div>

	<div id="signup">
		<h2>Signup</h2>
		<ul>
			<router-link to="/">Home</router-link>
		</ul>
	</div> 
</template>

<script>

export default {
	name: "LoginNav",
};
methods:

const Home = {
    template: '#home'
}

const Login = {
    template: '#login'
};

const Signup = {
    template: '#signup'
};

</script>


<style lang="css">

ul > li {
    display: inline-block;
    margin-right: 20px;
}

</style>