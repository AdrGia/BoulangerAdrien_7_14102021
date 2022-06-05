
<template>
	<section class="block-post" :id="post.id">
		<div class="before-header">
			<i class="fa-solid fa-pen" role="button" title="Modifier le post" v-on:click="updatePost"></i>
			<i class="fas fa-times" role="button" title="Supprimer le post" v-on:click="deletePost"></i>
		</div> 
		<header>
			<img alt="Avatar" :src="post.image"/>
			<span> {{ post.firstName }} {{ post.lastName }} </span>
			<h3>{{ post.title }}</h3>
		</header>
		<article>
			<p class="body-post">{{ post.body }}</p>
		</article>
		<footer class="footer-row">
			<Social :social="post.social"/>
		</footer>
	</section>
</template>

<script>
	import Social from './Social.vue';

	export default {
		name: 'Post',
		props: ['post'],
		components: {
			Social,
		},
		methods: {
			getUserRole() {
				this.$axios
				.get("user/role")
				.then((data) => {
					this.userRole = data.data[0].role;
				})
				.catch((e) => {
					if(e.reponse.status === 401) {
						this.alertConstant("Veuillez vous connecter");
					}
					if(e.reponse.status === 400) {
						this.alertConstant("Utilisateur non trouvé");
					}
					if(e.reponse.status === 500) {
						this.alertConstant("Erreur serveur");
					}
				});
			},
			get() {
				this.$axios
				.get("post")
				.then((data) => {
					this.posts = data.data;
				})
				.catch((e) => {
					if(e.response.status === 401) {
						this.alertConstant("Veuillez vous connecter")
					}
				});
			},
			newPost(data) {
				const formData = new formData();
				formData.append("image", data.post.image);
				formData.append("body", data.post.body);
				this.$axios
				.post("post", formData)
				.then(() => {
					this.get();
					this.alertActive('Post publié !');
				})
				.catch((e) => console.log(e));
			},
			updatePost(postId) {
				this.$axios
				.update("post/" + postId)
				.then(() => {
					this.alertActive("Post modifié !")
				})
				.catch((e) => console.log(e));

			},
			deletePost(postId) {
				this.$axios
				.delete("post/" + postId)
				.then(() => {
					this.alertActive("Post supprimé !");
				})
				.catch((e) => console.log(e));
			},
			/*postComment(postId) {
				const formValid = document.getElementByName('formComment')[0].checkValidity();
				if(formValid) {
					this.axios
					.post(`post/${postID}/comment`, { body: this.body })
					.then(() => {
						this.alertActive('Commentaire Publié');
					})
					.catch((e) => {
						console.log(e);
					})
				}
			}*/
		}
	};

</script>

<style>



Post

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
.footer-row {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
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
button {
  font-family: 'Poppins', sans-serif;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
}
.body-post {
  padding-top: 30px;
}
h3 {
  padding-top: 15px;
}





</style>