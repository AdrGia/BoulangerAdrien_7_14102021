<template>
	<div class="container">
		<loginNav/>
			<loginInfo  v-on:sendRequest="login"></loginInfo>
			<p v-if="message">{{ message }}</p>
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
	login(data) {
	console.log(data);
    this.email = data.email;
    this.password = data.password;

		this.$axios
		.post("user/login", {email: this.email, password: this.password})
		.then((data) => {
			sessionStorage.setItem('jwt', (data?.token ?? null));
			this.router.push('Feed');
		})
		.catch((error)=> {
			if(error.response.status === 401) {
				this.message = error.response.message;
			}
			if(error.response.status === 500) {
				this.message = error.response.message;
			}
			sessionStorage.removeItem("jwt");
			});
		console.log(this.data);
		},
	},
	mounted() {
		sessionStorage.removeItem("jwt");
		delete this.$axios.defaults.headers.common["Authorization"];
		document.tittle = "Se connecter"
	}
};	
</script>