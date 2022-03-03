<template>
	<header>
    <h1>
      <img class="image-logo" alt="Groupomania" src="../assets/icon-above-font.svg">
    </h1>
    <nav>  
     
        <router-link to="/">Se connecter</router-link> |
        <router-link to="/Signup">S'inscrire</router-link>
 
    </nav>
  </header>  
</template>

<script>
  export default {
    name: "navLogin",
  };
</script>

<style>
  img {
    margin-top: 100px;
  }
</style>