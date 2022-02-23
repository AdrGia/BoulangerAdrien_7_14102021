<template>
		<div class="container">
			<loginNav/>
			<signupInfo v-on:data-sent="udpateDataSignup"></signupInfo>
			<loginInfo validateText="S'inscrire" v-on:data-sent="updateData" v-on:request="signup">	
			<template v-slot: messageError>{{ message }}</template>
			</loginInfo>
	</div>

</template>

<script>

import LoginNav from "@/components/LoginNav.vue";
import SignupInfo from "@/components/SignupInfo.vue";
import LoginInfo from "@/components/LoginInfo.vue";

export default {
	name: "Signup",
	components: {
		LoginNav,
		LoginInfo,
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
		},
		updateData(data) {
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