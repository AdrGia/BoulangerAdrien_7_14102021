
<template>
	<div>
		<Alert v-if="!connected" :alertType="alert.type" :alertMessage="alert.message"/>
		<div v-else>
			<FeedNav/>
			<createPost v-on: post-sent="post"/>
			<Alert v-if="alert.active && !alert.activeComment" :alertType="alert.type" :alertMessage="alert.messsage"/>
			<Post v-for="post in posts" :key="post.postId" :post="post" />
			<div class="block-comment">
				<createComment v-on: comment-sent="comment"/>
				<Comment
				v-for="comment in comments"
				:key="comment.id"
				:comment="comment"
				/>
			</div>
		</div>
	</div>
</template>


<script>
	import FeedNav from '@/components/FeedNav.vue';
	import createPost from '@/components/createPost.vue';
	import createComment from '@/components/createComment.vue';
	import Post from '@/components/Post.vue';
	import Comment from '@/components/Comment.vue';

	export default {
		name: 'Feed',
		components: {
			FeedNav,
			createPost,
			createComment,
			Post,
			Comment,
		},
		data() {
			return {
				post: {
					id: "",
					firstName: "",
					lastName: "",
					title: "",
					image: "",
					body: "",
					social: "",

				},
				comment: {
					id: "",
					firstName: "",
					lastName: "",
					image: "",
					body: "",
				},
			};
		},
		mounted() {
			console.log('DEBUG', this.posts);
			
		}
	}
</script>