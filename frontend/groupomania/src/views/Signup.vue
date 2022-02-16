<template>
		<div class="container">
			<loginNav/>
			<signupInfo validateText="S'Inscrire" v-on:data-sent="udpateDataSignup"
			v-on:request-sent="signup">
			<template v-slot: messageError>{{ message }}</template>
			</signupInfo>
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
		udpateDataSignup(data) {
			this.firstName = data.firstName;
			this.lastName = data.lastName;
			this.email = data.email;
			this.password = data.password;
		},
		signup() {
			this.$axios
			.post("user/newuser", this.data)
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