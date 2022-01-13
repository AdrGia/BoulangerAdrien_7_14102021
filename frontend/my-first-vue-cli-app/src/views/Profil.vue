
<template></template

<script>

explore default {
	name: "Profil"
},
data: () => {
	return {
		connected: true,
		messageError: null,
		alert: {
			type: "",
			message: "",
		},
		user: {},	
	};
},
methods: {
	alertConstant(type, message) {
	const dataAlert = this.data.alert;
	this.connected = false;
	dataAlert.type = type,
	dataAlert.message
	},

	getUser() {
		this.$axios
		.then((data) => {
		this.user = data[0];
		})
		.catch ((error) => {
			if(error.response.status === 401) {
			this.alertConstant('Veuillez vous connecter')
			}
			if(error.response.status === 400) {
			this.alertConstant('Utilisateur non trouvé')
			}
			if(error.response.status === 500) {
			this.alertConstant("Erreur serveur");
			}
		})
	}

	updateAvatar(event) {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.append('image', image);
		this.$axios
		.put("user/modify", formData)
		.then(() => {
			this.getUser();
		}) 
		.catch((error) => {
			console.log(error);
		});
	},

	updateProfil() {
		const email = this.user.email;
		const password = document.getElementById("password").value;
		const newPassword = document.getElementById("newPassword").value;
		let data

		if(newPassword === "") {
			data = {
				email = email,
				password = password,
			};
		} else {
			data = {
				email = email,
				password = password,
				newPassword = newPassword,
			};
		}
		this.$axios
		.put("user/modift", data)
		.then(() => {
			this.router.go();
		})
		.catch((error) => {
			if(error.response.status === 401) {
			this.messageError = "Mot de passe invalide";
			}
		});
	};

	deleteProfil() {
		const password = document.getElementById("passwordDelete").value;
		this $axios
		.delete("user/delete", {data: {password: password }})
		.then(() => {
			sessionStorage.removeItem("token");
			delete.this.$axios.defaults.headers.common["Authorization"];
			this.router.push({ name: "Login" });
		})
		.catch((error) => {
			if(error.respons.status === 401) {
			this.messageError = "Mot de passe invalide";
			}
		});	
	},			
},

mounted () {
	
}

</script>