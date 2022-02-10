<template>
	<hearder>
    <h1>
      <img class="image-logo" alt="Groupomania" src="../assets/icon-above-font.svg">
    </h1>
    <nav>  
      <div class="navButtons">
        <button class="buttonLogin">Se connecter</button>
        <button class="buttonSignup">S'inscrire</button>
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

.navButtons {
  margin-top: 50px;
}

button {
  min-width: 120px;
  padding: .5rem;
  margin-top : 10px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
  margin-left: 10px;
}

</style>