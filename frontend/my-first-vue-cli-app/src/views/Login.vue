
<template>
	<loginNav></loginNav>
	<div class="content">
		<loginInfo validateText="Se Connecter" v-on:data-sent="updateDataLogin" 
		v-on:requet-sent="login">
			<template v-slot:messageError>{{ message }}</template>
		</loginInfo>
	</div>

</template>

<script>

import LoginNav from "@/components/LoginNav.vue";
import LoginInfo from "@/components/LoginInfo.vue";

export default {
	name: "Login",
	components: {
		LoginNav,
		LoginInfo,
	},

	data: () => {
		return {
		email: "",
		password: "",
		message: null,
	};
},
methods : {

	updateData(data) {
		this.email = data.email;
		this.password = data.password;
	},

	login() {
		this.$axios
		.post("user/login", this.data)
		.then((data) => {
			sessionStorage.setItem("token", data.token);
			this.$axios.defaults.headers.common["Authorization"] =
			"Bearer" + data.data.token;
			this.router.push('Feed');
		})
		.catch((error)=> {
			if(error.response.status === 401) {
				this.message = "Email ou mot de passe invalide";
			}
			if(error.response.status === 500) {
				this.message = "Erreur serveur";
			}
			sessionStorage.removeItem("token");
			});
		},
	},
	mounted() {
		sessionStorage.removeItem("token");
		delete this.$axios.defaults.headers.common["Authorization"];
		document.tittle = "Se connecter"
	}
};	

</script>