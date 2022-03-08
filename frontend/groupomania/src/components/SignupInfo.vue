<template> 
    <div class="container">
          <div class="container-signupinfo" >        
            <label for="name">Entrez votre Prénom
            <input type="text" id="firstName" maxlenght="30" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-model="lastName" placeholder="Prénom"/></label> 
        
            <label for="name">Entrez votre Nom
            <input type="text" id="lastName" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" maxlenght="30" v-model="firstName" placeholder="Nom"/></label>

            <label for="email">Entrez votre Adresse Mail
            <input type="email" id="email" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
            maxlenght="120" v-model="email" placeholder="Adresse mail"/></label>
  
            <label for="password">Entrez votre Mot Passe
            <input type="password" id="password" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
            maxlenght="120" v-model="password" placeholder="Mot de passe"/></label>
          </div>
          <button class="button-login" type="submit" @click="signup">S'inscrire</button>  
    </div>
</template>


<script>
export default {
    name:"SignupInfo",
    data: () => {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            message: null,
        };
    },
   methods : { 
    sendData() {
     const firstNameValid = document.getElementById("firtName")
     const lastNameValid = document.getElementById("lastName")
     const emailValid = document.getElementById("email")
     const passwordValid = document.getElementById("password")
     if(firstNameValid && lastNameValid && emailValid && passwordValid) {
      this.$emit("data-sent", this.$data);
      }
    },
    signup() {
      this.$axios
      .post("user/signup", this.data)
      .then(() => {
        this.$axios.post('user/signup', this.data).then((data) =>{
          sessionStorage.setItem('token', data.token);
          this.$axios.defaults.headers.common["Authorization"];
          this.$router.push('Feed');
        })
      })
      .catch((error) => {
        if(error.reponse.status === 500) {
          this.message = "Erreur du serveur";
        }
        sessionStorage.removeItem('token');
      });
    },  
  },
};  
</script>

<style lang="css">
body {
  font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
 
}
body {
  display: flex;
  flex-flow: wrap;
  font-size: 1.2rem;
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

input {
  text-align: center;
}
</style>