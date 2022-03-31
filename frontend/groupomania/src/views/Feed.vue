
<template>
	<div>
		<Alert v-if="!connected" :alertType="alert.type" :alertMessage="alert.message"/>
		<div v-else>
			<FeedNav/>
			<createPost v-on: post-sent="post"/>
			<Alert v-if="alert.active && !alert.activeComment" :alertType="alert.type" :alertMessage="alert.messsage"/>
			<Post v-for="post in posts" :key="post.postId" :post="post" />
			<div class="block-comment">
				<slot class="formComment" name="createComment"></slot>
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
	
</script>