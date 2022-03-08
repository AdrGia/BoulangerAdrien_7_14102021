<template> 
    <div class="container">    
            <label for="name">Entrez votre Prénom
            <input type="text" id="firstName"  required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-model="lastName" placeholder="Prénom" v-on:input="sendData"/></label> 
        
            <label for="name">Entrez votre Nom
            <input type="text" id="lastName" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" maxlenght="30" v-model="firstName" placeholder="Nom" v-on:input="sendData"/></label>
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
   methods : { 
    sendData() {
     const firstNameValid = document.getElementById("firtName")
     const lastNameValid = document.getElementById("lastName")
     if(firstNameValid && lastNameValid) {
      this.$emit("data-sent", this.$data);
      }
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