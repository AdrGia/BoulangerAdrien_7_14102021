
<template>
  <nav>
    <img class="image-logo" alt="Groupomania" src="../assets/icon.svg">
	<div class="navbar">
    <router-link to="/"><button class="navBtn">Déconnexion</button></router-link>
	</div>
</nav>
</template>

<script>
  
  export default {
    name: "FeedNav",
  };

</script>

<style lang="css">

input {
  font-size: 1.3rem;
  border-radius: 5px;
}

.navBtn{
  height: 30px;
  margin: 0;
  width: 100px;
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

.image-logo {
  width: 300px;
 
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
