
<template>
	<div class="navbar">
		<div class="logo"><img src="https://projet-7.dev-web.fr/assets/logo/logo.png" alt="logo"></div>
		<input id="search" name="search" type="text" />
		<button class="buttonSearch">Chercher</button>
		<button class="navBtn">Profile</button>
		<button class="navBtn">Notification</button>
		<button class="navBtn">Déconnexion</button>
	</div>
</template>

<script></script>

<style lang="css">

.navbar {
  display: flex;
  place-items: center;
  margin-top: 30px;
  margin-left: 80px;
}
img {
 width: 300px;
 margin-right: 50px; 
}
input {
  font-size: 1.3rem;
  border-radius: 5px;
}
.buttonSearch {
  margin-left: 10px;
  margin-right: 30px;
  min-width: 120px;
  padding: .3rem;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
}

.navBtn{
  height: 30px;
  margin: 0;
  width: 100px;
  margin-right: 10px;
  background-color: #fff;
  border: 0;
  box-shadow: inset 0 0 0 0 #FFD7D7;
  transition: 0.4s ease-out;
  font-weight: bold;
  cursor: pointer;
}
 .navBtn:hover {
  box-shadow: inset 0 50px 50px 0 #FFD7D7;
}
</style>