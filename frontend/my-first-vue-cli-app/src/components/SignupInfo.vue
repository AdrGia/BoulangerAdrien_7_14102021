
<template>
	<div class="rowFirstName">
		<label for="name">Entrez votre prénom</label>
		<input type="text" id="firstName" required maxlenght="30" v-model="firstName"
			v-on:input="sendData"/> 
	</div>
	<div class="rowLastName">
		<label fpr="name">Entrez votre nom</label>
		<input type="text" id="lastName" required maxlenght="30" v-mondel="lastName"
			v-on:input="sendData"/>
	</div>

</template>


<script>

export default {
	name:"SignupInfo",
	data: () => {
		return {
			firstName: "",
			lastName: "",
		};
	},
	methods: {
		sendData() {
			const firstNameValid = document
			.getElementById("firstName")
			.checkValid();
			const lastNameValid = document
			.getElementById("lastName")
			.checkValid();
			if(firstNameValid && lastNameValid) {
				this.$emit("data-sent", this.data);
			}
		},
	},
};

</script>