
<template>
  <div class="container">
    <Alert v-if="!connected" :alertYpe="alert.type" :alertMessage="alert.message" />
    <div v-else>
      <section>
        <div class="container-profil">
          <div class="img">
            <img src=""/>
            <input type="file" accept="image/*" id="imageInput" v-on:change="modifyImage">
            <label for="imageInput" class="image-button">Choix de l'image</label>
          </div>
          <div class="infos">
            <h3>Nom</h3>
            <h3>Prénom</h3>
            <h3>Mail</h3>
          </div>
          <div class="password-modify">
            <h3>Changer de mot passe :</h3>
            <h4>Mot passe actuel :</h4>
            <input id="oldPassword" type="password"/>
            <h4>Nouveau mot passe :</h4>
            <input id="newPassword" type="password"/>
            <h4>Confirmation du nouveau mot passe :</h4>
            <input id="confirmPassword" type="password"/>
            <button class="change-password" v-on:click="modifyPassword">Valider</button>
          </div>
          <div class="delete-profil">
            <h3>Supprimer votre compte</h3>
            <input class="password" type="password" id="passwordDelete"/>
            <button class="delete-button" type="submit" v-on:click="deleteProfil">Supprimer</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
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
        const dataAlert = this.$data.alert;
        this.connected = false;
        dataAlert.type = type;
        dataAlert.message = message;
      },
      getUser() {
        this.$axios
        .get('user/$(this.$route.params.id/profile')
        .then((data) => {
          this.user = data.data[0];
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.alertConstant("Veuillez vous connecter");
          }
          if (error.response.status === 400) {
            this.alertConstant("Utilisateur non trouvé");
          }
          if (error.response.status === 500) {
            this.alertConstant("Erreur serveur");
          }
        });
      },
      modifyPassword() {
        const oldPassword = document.getElementById("oldPassword").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const formData = new formData();
        this.$axios
          if(oldPassword == "" || newPassword == "" || confirmPassword == "") {
            alert();
          } else if (oldPassword == newPassword) {
            alert();
          } else if (newPassword != confirmPassword) {
            alert();
          }
      },
      modifyImage() {
        const image = event.target.files[0];
        const formData = new formData();
        formData.append("image", image);
        this.$axios
          .put("user/changeProfilePicture", formData)
          .then(() => {
            this.getUser();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteProfile() {
        const password = document.getElementById("passwordDelete").value;
        this.$axios
        .delete("user/deleteAccount", {data : { password: password} })
        .then(() => {
          sessionStorage.removeItem("token");
          delete this.$axios.defaults.headers.common["Authorization"];
          this.$router.push({ name: "Login"})
        })
        .catch((error) => {
          if(error.response.status === 401) {
            this.messageError = "Mot de passe invalidé";
          }
        });
      },
    },
  }

</script>

<style lang="css">

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background:  
}
.container-profil {
  flex-flow: wrap;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);
  max-width: 700px;
  margin: 1rem;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
}
.container-profil::after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 17rem;
  width: 17rem;
  background-color: #FFD7D7;
  top: -8rem;
  right: -8rem;
  box-shadow: 2rem 6rem 0 -3rem #FFF;
  border-radius: 50%;
}
button {
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  padding: .5rem;
  margin-top : 10px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
  background-color: #FFD7D7;
}
.infos {
 margin-top: 30px;
}
.password-modify {
  margin-top: 40px;
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 10px;
}
.change-password  {
  display: flex;
  justify-content: center;
}
input {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.25rem;
}
#imageInput {
  display: none;
}
img {
  max-width: 100%;
  display: block; 
}

.image-button {
  font-family: 'Poppins', sans-serif;
  background-color: #FFD7D7;
  min-width: 120px;
  padding: .5rem;
  margin-top : 10px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
}
.delete-button {
  display: flex;
  justify-content: center;
}
</style>