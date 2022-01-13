
<template>

	<div class="content">

	</div>

</template>

<script>

import LoginNav from "@/components/LoginNav.vue";
import SignupInfo from "@/components/SignupInfo.vue";
import LoginInfo from "@/components/LoginInfo.vue";

export default {
	name: "Signup",
}
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
	
	updateDataSignup(data) {

      this.firstName = data.firstName;
      this.lastName = data.lastName;
    },

	updateDataLogin(data) {
	this.email = data.email;
	this.password = data.password;
	},

	signup() {
	this.$axios
	.post("user/newUser", this.data)
	.then(() => {
		this.$axios.post('user/login', this.data).then((data) => {
		sessionStorage.setItem('token', data.token);
		this.$axios.defaults.headers.common["Authorization"];
		this.router.push('Feed');
		})
	})
	.catch((error) => {
		if(error.response.status === 500) {
			this.message = "Erreur serveur";		
		}

		sessionStorage.removeItem('token');
	})
}
	
	mounted() {
		document.title = "Création de compte"
	},
};

</script>