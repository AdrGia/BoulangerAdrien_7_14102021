
<template></template>

<script>

export default {
	name: "Login",
},
data: () => {
	return {
	email: "",
	password: "",
	message: null,
	};
},
methods : {

	updateData(data){
	this.email = data.email;
	this.password = data.password;
	},

	login() {
	this.login
	.post("user/login", this.data)
	.then((data) => {
	sessionStorage.setItem("token", data.token);
	})
	.catch((error)=> {
	if(error.response.status === 401) {
		this.message = "Email ou mot de passe invalide";
	}
	if(error.response.status === 500) {
		this.message = "Erreur serveur";
	}
	sessionsStorage.removeItem("token");
	});
	},
},

</script>