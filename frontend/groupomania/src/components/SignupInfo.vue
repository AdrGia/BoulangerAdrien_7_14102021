<template> 
    <div class="container">
        
            <label for="name">Entrez votre Prénom</label>
            <input type="text" id="firstName" maxlenght="30" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-on:input="sendData"/> 
        
        
            <label for="name">Entrez votre Nom</label>
            <input type="text" id="lastName" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" maxlenght="30" v-on:input="sendData"/>

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