
<template>
	<article class="comment-container">
  <slot name="comment-delete"></slot>
  <header>
    <p class="profile-commment" role="link" >
      <slot name="avatarUrl"></slot>
      <slot name="firstName"></slot>
      <slot name="lastName"></slot>
    </p>
  </header>
  <div class="body-comment">
    <p>
      <slot name="comment-body"></slot>
    </p>
  </div>
  <footer class="footer-comment">
    <div class="like-comment">
      <i class="fa-solid fa-thumbs-up" aria-hidden="true" role="button" :class="reactionUp" v-on:click="reactionUp"></i>
    </div>
    <div class="dislike-comment">
      <i class="fa-solid fa-thumbs-down" aria-hidden="true" role="button" :class="reactionDown" v-on:click="rectionDown"></i>
    </div>
  </footer>
</article>
	
</template>

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