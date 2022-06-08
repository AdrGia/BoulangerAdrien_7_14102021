
<template>
	<section>
		<div class="block-comment" :id="comment_id">
			<div class="before-header">
				<i class="fa-solid fa-pen" role="button" title="Modifier le post" v-on:click="modifyComment"></i>
				<i class="fas fa-times" role="button" title="Supprimer le commentaire" v-on:click="deleteComment"></i>
			</div>
			<header>
				<img alt="Avatar" :src="comment.image"/>
				<span>{{ comment.firstName }} {{ comment.lastName }}</span>
			</header>
			<article>
				<p class="body-comment">{{ comment.body }}</p>
			</article>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Comment",
		props: ['comment'],
		methods: {
			
			newComment(data) {
				const formData = new FormData();
				formData.append('image', data.comment.image);
				formData.append('body', data.comment.body);
				this.$axios
				.then(() => {
					this.alertActive('Commentaire publié !')
				})
				.catch((e) => console.log(e))
			},
			modifyComment(comment_id) {
				this.$axios
				.update("comment/" + comment_id)
				.then(() => {
					this.alertActive("Commentaire modifié !")
				})
				.catch((e) => console.log(e))
			},
			deleteComment(comment_id) {
				this.$axios
				.delete("comment/" + comment_id)
				.then(() => {
					this.alertActive("Commentaire supprimé !")
				})
				.catch((e) => console.log(e))
			},
		}	
	};	
</script>

<style>


section {
  width: 25em;
  background-color: #FFD7D7;
  border-radius: .3em;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3);
  line-height: 1.3em;
  border: 2px solid #FFD7D7;
  padding-left: 5px;
  border-radius: 15px;
} 
i {
  color: white;
  cursor: pointer;
  font-size: 1.3em;
  padding-left: 5px;
}
img {
  width: 30%;
 
}
.before-header {
  display: flex;
  justify-content: right;
  padding-top: 5px;
  padding-right: 10px;
}
.body-comment {
  padding-top: 30px;
}

</style>