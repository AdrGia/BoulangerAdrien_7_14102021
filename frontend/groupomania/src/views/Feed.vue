
<template>
<div>
	<Alert v-if="!connected" :alertType="alert.type" :alertMessage="alert.message"/>
	<div v-else>
		<FeedNav/>
		<createPost v-on: post-sent="post"/>
		<Alert v-if="alert.active && !alert.activeComment" :alertType="alert.type" :alertMessage="alert.messsage"/>
		<Post
			v-for="post in posts"
			:key="post.postID"
			:idPost="post.postID"
			:idUser="post.userID"
			v-on:d-comment-input="dCommentInput(post.postID)"
			v-on:reaction-down="sendReaction(post.postID, -1)"
			v-on:reaction-up="sendReaction(post.postID, 1)"
			v-on:reaction-none="sendReaction(post.postID, 0)"
			:reaction="post.yourReaction"
		>
			<template v-slot:postDelete v-if="userRole == 'admin'">
				<i class="fas fa-times" aria-hidden="true" title="Supprimer le post" role="button" v-on:click="deletePost(post.postID)"></i>
				<span>Supprimer le post</span>
			</template>
			<template v-slot:postDelete v-else-if="post.yourPost > 0">
				<i class="fas fa-times" aria-hidden="true" title="Supprimer le post" role="button" v-on:click="deletePost(post.postID)"></i>
				<span>Supprimer le post</span>
			</template>
			<template v-slot:userName>{{ post.firstName + '' + post.lastName }}</template>
			<template v-slot:postLegend>{{ post.legend }}</template>
			<template v-slot:createComment>
				<createComment
				v-on:comment-sent="udapteBody"
				v-if="commentInputShow && commentID === post.postID">
				<button class="button-create" type="submit" v-on:click.prevent="postComment(post.postID)">Publier</button>	
				</createComment>
				<Alert v-if="alert.active && alert.activeComment && (commentID === post.postID)" :alertType="alert.type" :alertMessage="alert.message" />
			</template>
			<template v-slot:postUp>{{ post.countUp }}</template>
			<template v-slot:postDown>{{ post.countDown }}</template>
		</Post>	
	</div>		
</div>
</template>

<script>
	import FeedNav from "@/components/FeedNav.vue";
	import Alert from "@/components/Alert.vue";
	import Post from "@/components/Post.vue";
	import createPost from "@/components/createPost.vue";
	import createComment from "@/components/createComment.vue"
	

	export default {
		name: "Feed",
		components: {
			FeedNav,
			Post,
			Alert,
			createPost,
			createComment,
		},
		data: () => {
			return {
				connected: true,
				alert: {
					active: false,
					type: "",
					message: "",
				},
				post: [],
				body: "",
				commentInputShow: false,
				commentId: "",

			};
		},
		methods: {
			alertConstant(type, message) {
				const dataAlert = this.$data.alert;
				this.connected = false;
				dataAlert.type = type;
				dataAlert.message = message;
			},
			getPost() {
				this.$axios
				.get("post")
				.then((data) => {
					this.posts = data.data;
				})
				.catch((error) => {
					if(error.response.status === 401) {
						this.alertConstant("Veuillez vous connecter");
					}
				});
			},
			post(data) {
				const formData = new FormData();
				formData.append("image", data.image);
				formData.append("legend", data.legend);
				this.axios
				.post("post", formData)
				.then(() => {
					this.getPost();
					this.alertActive("Post publié !");
				})
				.catch((error) => console.log(error));
			},
			deletePost(postId) {
				this.$axios
				.delete("post/" + postId)
				.then(() => {
					const indexPost = this.$data.posts
					.map((error) => {
						return error.postId;
					})
					.index(parseInt(postId));
					this.$data.posts.splice(indexPost, 1);
					this.alertActive("Post supprimé !");
				})
				.catch((error) => console.log(error));
			},
			sendReaction(postId, reaction) {
				this.$axios
				.post(`post/$(postId)/reaction`, { reaction: reaction })
				.then(() => {
					this.getPost();
				})
				.catch((error) => console.log(error));
			},
			commentInput(postId) {
				if(this.commentInputShow) {
					this.commentID = postId;
				} else {
					this.commentInputShow = true;
					this.commentID = postId;
				}
			},
			updateBody(data) {
				this.body = data.body;
			},
			postComment(postId) {
				const formValid = document.getElementByName("formComment")[0].checkValid();
				if(formValid) {
					this.$axios
					.post(`post/${postId}/comment`, { body: this.body })
					.then(() => {
						this.commentInputShow = false;
						this.alert.activeComment = true;
						this.alertActive("Commentaire publié !");
					})
					.catch((error) => {
						console.log(error);
					});
				}
			},
			

		},
		mounted() {
			this.getPost();
			document.title = "Fil d'actualité"
		},
	};
</script>
