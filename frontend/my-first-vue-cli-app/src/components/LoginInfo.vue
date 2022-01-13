
<template>
	<div class="rowEmail">
		<label for="email">Entrez votre adresse mail.</label>
		<input type="email" id="email" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
		maxlenght="120" v-model="email" v-on:input="sendData"/>
	</div>
	<div class="rowPassword">
		<label for="password">Entrez votre mot passe.</label>
		<input type="password" id="password" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
		maxlenght="120" v-model="password" v-on:input="sendData"
	</div>
	<button></button
</template>

<script>

export default {
	name: "LoginInfo",
	data : () => {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		sendData() {
			rhis.$emit("data-sent", this.data);
		},
		sendRequest() {
			const emailValid = document.getElementById("email").checkValid();
			const passwordValid = document.getElementById("password").checkValid();
			if(eamilValid && passwordValid){
				this.$emit("request-sent");
			}
		},
	},
};

</script>