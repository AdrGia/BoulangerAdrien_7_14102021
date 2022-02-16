<template>
	<hearder>
    <h1>
      <img class="image-logo" alt="Groupomania" src="../assets/icon-above-font.svg">
    </h1>
    <nav>  
      <div class=navLink>
        <router-link to="/">Se connecter</router-link> |
        <router-link to="/Signup">S'inscrire</router-link>
      </div>
    </nav>
  </hearder>  
</template>

<script>
  export default {
    name: "navLogin",
  };
</script>

<style lang="css">

.navLink {
  margin-top: 50px;
}


</style>