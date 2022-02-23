
<template></template>

<script>
	export default {
		name: "Comment",
		props: ["idUser", "recation"],
		data: () => {
			return {
				recationUp: "",
				recationDown: "",
			};
		},
		methods: {
			sendReactionUp() {
				if(this.reaction === 1) {
					this.$emit("reaction-none");
				}
				this.$emit("reaction-up");
			},
			sendReactionDown() {
				if(this.reaction ==== -1) {
					this.$emit("reaction-none");
				}
				this.$emit("recation-down");
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
		mounted() {
			this.updateReaction();
		},
		updated() {
			this.updateReaction();
		},
	};
</script>