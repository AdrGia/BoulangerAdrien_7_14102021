<template>

	<header>

		<h1>
			<img class="image-logo" alt="Groupomania" src="../assets/logo.svg"/>
		</h1>

		<nav>
			<router-link to="/Login">Se connecter</router-link>
			<router-link to="/Signup">S'inscrire</router-link>
		</nav>

	</hearder>

</template>

<script>

export default {
	name: "LoginNav",
};

</script>

<style></style>