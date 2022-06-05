
<template>
	<div>
			<FeedNav/>
			<createPost v-on: post-sent="post"/>
			<containerPost/>
	</div>
</template>


<script>
	import FeedNav from '@/components/FeedNav.vue';
	import createPost from '@/components/createPost.vue';
	import containerPost from '@/components/containerPost.vue';

	export default {
		name: 'Feed',
		components: {
			FeedNav,
			createPost,
			containerPost,
		},
	
		mounted() {
			console.log('DEBUG', this.posts);
			
		}
	}
</script>