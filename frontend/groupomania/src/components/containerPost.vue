<template>
	<div class="post-container">
		<Post v-for="post in posts" :key="post.postId" :post="post">
			<div class="block-comment">
				<createComment v-on: comment-sent="comment"/>
				<Comment
				v-for="comment in comments"
				:key="comment.id"
				:comment="comment"
				/>
			</div>
		</Post>
	</div>
</template>

<script>

	import Post from '@/components/Post.vue';
	import createComment from '@/components/createComment.vue';
	import Comment from '@/components/Comment.vue';

	export default {
		name: 'containerPost',
		components: {
			Post,
			createComment,
			Comment,
		},

	}
</script>