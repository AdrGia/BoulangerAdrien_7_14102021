<template>
  <div class="container">
    <form @submit.prevent="sendRequest($event)">
      <div class="container-signupinfo">
        <label for="firstName">Entrez votre Prénom
          <input type="text"
                 id="firstName"
                 required
                 v-model="lastName"
                 placeholder="Prénom"/>
        </label>

        <label for="lastName">Entrez votre Nom
          <input type="text"
                 id="lastName"
                 required
                 v-model="firstName"
                 placeholder="Nom"/>
        </label>

        <label for="email">Entrez votre Adresse Mail
          <input type="email"
                 id="email"
                 required
                 v-model="email"
                 placeholder="Adresse mail"/>
        </label>

        <label for="password">Entrez votre Mot Passe
          <input type="password"
                 id="password" required
                 v-model="password"
                 maxlength="25"
                 placeholder="Mot de passe"/>
        </label>
      </div>
      <button class="button-login" type="submit">S'inscrire</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "SignupInfo",
  data: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: null,
    };
  },
  methods: {
    sendRequest(event) {
      if(event) {
        event.preventDefault();
      }
      const firstNameValid = document.getElementById("firstName")
      const lastNameValid = document.getElementById("lastName")
      const emailValid = document.getElementById("email")
      const passwordValid = document.getElementById("password")
      if (firstNameValid && lastNameValid && emailValid && passwordValid) {
        this.$emit("sendRequest", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          message: this.message,
        });
      }
    }
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
  margin-top: 30px;
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