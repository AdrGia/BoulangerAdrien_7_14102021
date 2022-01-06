
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
}

</script>