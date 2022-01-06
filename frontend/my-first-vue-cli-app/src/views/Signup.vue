
<template></template>

<script>

export default {
	name: "Signup",
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
	
	updateDataSignup(data) {
	this.firstName = data.firstName;
	this.lastName = data.lastName;
	}

	updateDataLogin(data) {
	this.email = data.email;
	this.password = data.password;
	},

	signup() {
	this.signup
	.post("user/newUser", this.data)
	.then(() => {
	})
	.catch((error) => {
		if(error.response.status === 500) {
			this.message = "Erreur serveur";		
		}


	})
	}
	
	mounted() {
		document.title = "Création de compte"
	},
};

</script>