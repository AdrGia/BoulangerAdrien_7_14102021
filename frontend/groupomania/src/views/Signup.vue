<template>
		<div class="container">
			<loginNav/>
			<signupInfo v-on:data-sent="udpateData"></signupInfo>
			<button class="button-login" type="submit" v-on:click="signup">S'inscrire</button>
	</div>

</template>

<script>
import LoginNav from "@/components/LoginNav.vue";
import SignupInfo from "@/components/SignupInfo.vue";

export default {
	name: "Signup",
	components: {
		LoginNav,
		SignupInfo,
	},
	data: () => {
		return {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			message: null,
		};
	},
	methods: {
		udpateData(data) {
			this.firstName = data.firstName;
			this.lastName = data.lastName;
			this.email = data.email;
			this.password = data.password;
		},
		signup() {
			this.$axios
			.post("user/signup", this.data)
			.then(() => {
				this.$axios.post('user/signup', this.data).then((data) =>{
					sessionStorage.setItem('token', data.token);
					this.$axios.defaults.headers.common["Authorization"];
					this.$router.push('Feed');
				})
			})
			.catch((error) => {
				if(error.reponse.status === 500) {
					this.message = "Erreur du serveur";
				}
				sessionStorage.removeItem('token');
			});
		},
		mounted() {
			document.title = "Création du compte";
		},
	},
};
</script>