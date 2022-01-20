
<template>
	<div class="content">
		 <div class="row">
			<label for="email">Entrez votre Adresse Mail</label>
			<input type="email" id="email" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
			maxlenght="120" v-model="email" v-on:input="sendData"/>
		</div>
		<div class="row">
			<label for="password">Entrez votre Mot Passe</label>
			<input type="password" id="password" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
			maxlenght="120" v-model="password" v-on:input="sendData"
		</div>
   		 <button name="button">Connexion</button>

	</div>
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
			this.$emit("data-sent", this.data);
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

<style lang="css">

.corps {
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
}

.row {
  display: flex;
  flex-direction: column;
  
}

label {
  margin-bottom: 10px;
 
}
input, button {
  width: 100px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}

button {
  margin-top: 20px;
  
}

</style>