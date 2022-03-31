
<template>
	<button class="button-like" :class="reactionUp" v-on:click="reactionUp">
		<i class="fa-solid fa-thumbs-up" role="button">{{ social.like }}</i>
	</button>

	<button :class="reactionDown" v-on:click="reactionDown">
		<i class="fa-solid fa-thumbs-down" role="button">{{ social.disLike }}</i>
	</button>
</template>

<script>
	export default {
		name: "Social",
		props: ["social"],
		data: () => {
			return {
				reactionUp: "",
				reactionDown: "",
			};
		},
		methods: {
			updateReactionUp() {
				if(this.reaction === 1) {
					this.$emit("reaction-none");
				}
				this.$emit("reaction-up")
			},
			updateReactionDown() {
				if(this.reaction === -1) {
					this.$emit("reaction-none")
				}
				this.$emit("reaction-down")
			},
			updateReaction() {
				if (this.reaction === 1) {
					this.reactionUp = "reactionActive";
					this.reactionDown = "reactionNone";
				}
				else if (this.reaction === -1) {
					this.reactionUp = "reactionNone";
					this.reactionDown = "reactionActive";
				}
				else {
					this.reactionUp = "reactionNone";
					this.reactionDown = "reactionNone";
				}
			},
		},
	};
</script>

<style></style>