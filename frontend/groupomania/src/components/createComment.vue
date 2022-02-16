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
		<button class="buttonComment" v-on:click="sendComment">Commenter</button>
</form>
</template>

<script>
	export default {
		name: "createComment",
		data: () => {
			return {
				body: "",
			};
		},
		methods: {
			sendComment() {
				this.$emit("comment-sent", this.$data);
			},
		},
	};
</script>

<style lang="css">
form {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
}
button {
  margin-top: 30px;
  width: 100px;
  min-width: 120px;
  padding: .5rem;
  margin-top : 10px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
  
}
textarea {
 width: 700px;
 background-color: #FFD7D7; 
}

</style>