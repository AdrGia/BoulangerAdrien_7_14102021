
<template>
	
	<div class="card">	
    <div class="img">
	<button class"imageButton">Changer la photo</button>
	</div>
    <div class="infos">
    <h3>Nom</h3>
    <h3>Prénom</h3>
    <h3>Email</h3>
    </div>
    <div class="section">
    <div class="modifyPass">
    <h3>Changer votre Mot de Passe :</h3>
    <label>Mot Passe Actuel <input type="text"></label>
    <label>Nouveau Mot Passe <input type="text"></label>
    <button class"changePassword">Valider</button>
    </div>
    <div class="links">
    <h3>Supprimer votre Compte</h3>
    <button class="deleteButton">Supprimer</button>
	</div>
	</div>
	</div>
</template>

<script>

import Alert from "@/components/Alert.vue";
export default {
	name: "Profil",
	components: {
		Alert
	},
	data: () => {
		return {
			connected: true,
			messageError: null,
			alert: {
				type: "",
				mesaage: "",
			},
			user: {},
		};
	},
}

</script>

<style lang="css">

body {
  font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
img {
  max-width: 100%;
  display: block;
}
.card::after,
.card img {
  border-radius: 50%;
}
body,
.card {
  display: flex;
  flex-flow: wrap;
}
.card {
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .5);
  max-width: 700px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);
  margin: 1rem;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
}
.card::after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 15rem;
  width: 15rem;
  background-color: #4172f5aa;
  top: -8rem;
  right: -8rem;
  box-shadow: 2rem 6rem 0 -3rem #FFF
}
.card img {
  width: 10rem;
  min-width: 80px;
  box-shadow: 0 0 0 5px #FFF;
}
.infos {
  margin-left: 1.5rem;
  font-size: 1.3rem;
}

input {
  
  font-size: 1rem;
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
}
.imageButton .img {
  display: flex;
  flex-direction: column;
}
.section {
  display: flex;
  flex-flow: column wrap;
}

label {
  display: flex;
}
@media screen and (max-width: 450px) {
 .card {
    display: block;
  }
 .links button {
    min-width: 100px;

</style>
