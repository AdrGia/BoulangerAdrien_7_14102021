
<template>
	<article class="body-post">
  <header>
    <h3>Commentaire de</h3>
  </hearder>
  <p>Hashtag salvia Godard chia tote bag, sriracha XOXO kogi Tumblr disrupt. Cardigan keytar Intelligentsia, Austin heirloom tofu disrupt. Blue Bottle 8-bit plaid, DIY fanny pack church-key banh mi fap narwhal quinoa Pitchfork iPhone. Photo booth High Life
      asymmetrical bitters gluten-free, kale chips Kickstarter migas.</p>
  <footer class="footer-row">
    <div class="like">
     <i class="fa-solid fa-thumbs-up" aria-hidden="true" role="button" :class="reactionUp" v-on:click="reactionUp"></i>
    </div>
    <div class="dislike">
      <i class="fa-solid fa-thumbs-down" aria-hidden="true" role="button" :class="reactionDown" v-on:click="rectionDown"></i>
    </div>
    <div class="i-comment">
      <i class="fas fa-comments" aria-hidden="true" role="button" v-on:click="displayCommentInput"></i> 
    </div>
  </footer>
</article>


</template>

<script>
	export default {
		name: "Post",
		data: () => {
			return {
				reactionUp: "",
				reactionDown: "",
				cursor: "pointer",
			};
		},
		methods: {
			displayCommentInput() {
				this.$emit("comment-input");
			},
			sendReactionUp() {
				if(this.reaction === 1) {
					this.$emit("reaction-none");
				}
				this.$emit("reaction-up");
			},
			sendReactionDown() {
				if(this.reaction === -1) {
					this.$emit("reaction-none");
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
		mounted() {
			this.updateReaction();
			if(this.$route.name === "Feed") {
				this.cursor = "pointer";
			} else {
				this.cursor = "default";
			}
		},
		updated() {
			this.updateReaction();
		},

	};
</script>

<style>
article {
  width 25em;
  background-color: #FFD7D7;
  border-radius .3em;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3);
  line-height 1.3em;
  border: 2px solid #FFD7D7;
  padding-left: 10px;
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
}
</style>