<template> 
    <div class="content">
        
            <label for="name">Entrez votre Prénom</label>
            <input type="text" id="firstName" required maxlenght="30" v-model="firstName"
            v-on:input="sendData"/> 
        
        
            <label fpr="name">Entrez votre Nom</label>
            <input type="text" id="lastName" required maxlenght="30" v-model="lastName"
            v-on:input="sendData"/>
       
        
            <label for="email">Entrez votre Adresse Mail</label>
            <input type="email" id="email" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
            maxlenght="120" v-model="email" v-on:input="sendData"/>
        
        
            <label for="password">Entrez votre Mot Passe</label>
            <input type="password" id="password" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                   maxlenght="120" v-model="password" v-on:input="sendData"/>
        
         <div class="buttonOn"> 
           <button name="button">S'incrire</button>
         </div>

    </div>
</template>


<script>
export default {
    name:"SignupInfo",
    data: () => {
        return {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
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
            const emailValid = document
            .getElementById("email")
            .checkValid();
            const password = document
            .getElementById("password")
            .checkValid();
            if(firstNameValid && lastNameValid && emailValid && passwordValid) {
                this.$emit("data-sent", this.data);
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
  min-height: 100vh;
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