
<template>
	<div class="navbar">
		<div class="logo"><img src="https://projet-7.dev-web.fr/assets/logo/logo.png" alt="logo"></div>
		<button class="navBtn">Profile</button>
		<button class="navBtn">Notification</button>
		<button class="navBtn">Déconnexion</button>
	</div>
</template>

<script>
  
  export default {
    name: "FeedNav",
  };

</script>

<style lang="css">

.navbar {
  display: flex;
  justify-content: space-around;
  place-items: center;
  margin-top: 30px;
}
img {
 width: 300px;
  
}
input {
  font-size: 1.3rem;
  border-radius: 5px;
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