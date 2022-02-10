
<template>
	<div class="container">
		
			<label for="email">Entrez votre Adresse Mail</label>
			<input type="email" id="email" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
			maxlenght="120" v-model="email" v-on:input="sendData"/>
	
			<label for="password">Entrez votre Mot Passe</label>
			<input type="password" id="password" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
			maxlenght="120" v-model="password" v-on:input="sendData"/>
			<div class="buttonOn">
			<button class="buttonLogin" type="submit" v-on:click="sendRequest">Connexion</button>
			</div>
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
			if(emailValid && passwordValid){
				this.$emit("request-sent");
			}
		},
	},
};

</script>

<style lang="css">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700&display=swap');
body {
  font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

body {
  display: flex;
  flex-flow: wrap;
  font-size: 1.2rem
}

input {
  
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 10px;
}
button {
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  padding: .5rem;
  margin-top : 30px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
  
}
.buttonOn {
  display: flex;
  justify-content: center;
}


</style>