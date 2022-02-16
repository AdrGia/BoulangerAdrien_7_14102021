<form class="createPost">
  <textarea
  name="post"
  class="post"
  cols="80"
  rows="5"
  maxlength="180"
  required
  placeholder="Créer un post"
  aria-label="Ecrire un post"
  v-model="legend"
  v-on:input="sendPost"
  ></textarea>
  <button class="buttonPost" v-on:click="sendPost">Publier</button>
</form>

<script>
  export default {
    name: "createPost"
    data: () => {
      return {
        legend: "",
      };
    },
    methods: {
      sendPost() {
        const formValid = document.getElementByName("createPost")[0].checkValidity();
        if(formValid) {
          this.$emit("post-sent", this.$data);
          document.getElementByName("legend")[0].value = null;
        }
      },
    },
  };
</script>

<style lang="css">
form {
  display: flex;
  flex-flow: column wrap;
  
}
textarea {
 width: 350px;
}
button {
  margin-top: 30px;
  width: 100px;
  min-width: 120px;
  padding: .5rem;
  margin-top : 10px;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;  
}
</style>