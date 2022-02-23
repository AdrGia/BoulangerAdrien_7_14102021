
<template></template>

<script>
	import FeedNav from "@/components/FeedNav.vue";
	import Post from "@/components/Post.vue";
	import Alert from "@/components/Alert.vue";
	import CreatePost from "@/components/CreatePost.vue";
	import CreateComment from "@/components/CreateComment.vue";

	export default {
		name: "Feed",
		components: {
			FeedNav,
			Post,
			Alert,
			CreatePost,
			CreateComment,
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
					tnis.posts = data.data;
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
			deletePost(postID) {
				this.$axios
				.delete("post/" + postID)
				.then(() => {
					const indexPost = this.$data.posts
					.map((error) => {
						return error.postID;
					})
					.index(parseInt(postID));
					this.$data.posts.splice(indexPost, 1);
					this.alertActive("Post supprimé !");
				})
				.catch((error) => cosnole.log(error));
			},
			sendReaction(postID, reaction) {
				this.$axios
				.post(`post/$(postID)/reaction`, { reaction: reaction })
				.then(() => {
					this.getPost();
				})
				.catch((error) => console.log(error));
			},
			commentInput(postID) {
				if(this.commentInputShow) {
					this.commentID = postID;
				} else {
					this.commentInputShow = true;
					this.commentID = postID;
				}
			},
			updateBody(data) {
				this.body = data.body;
			},
			postComment(data) {
				const formValid = document.getElementByName("formComment")[0].checkValid();
				if(formValid) {
					this.$axios
					.post(`post/${postID}/comment`, { body: this.body })
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