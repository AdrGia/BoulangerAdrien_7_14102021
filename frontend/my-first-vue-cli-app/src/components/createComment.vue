<template>
	<form name="createComment">
		<textarea
		name="comment"
		class="comment"
		cols="150"
		rows="5"
		required
		placeholder="Créer un commentaire"
		aria-label="Ecrire un commentaire"
		v-model="body"
		v-on:input="sendComment"
		></textarea>
		<button class="buttonComment" v-on:click="commentValid">Commenter</button>
</form>
</template>

<script></script>

<style lang="css">

form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.buttonComment {
   padding: .3rem;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 10rem;
  margin-top: 10px;
}
textarea {
  background-color: #FFD7D7;
  font-size: 1rem;
}
</style>