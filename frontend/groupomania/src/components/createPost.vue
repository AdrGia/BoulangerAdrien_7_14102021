<template>
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
     
<button type="button" class="button-gif">
  <label for="custom-file-input">Fichiers</label>
</button>
<input type="file" id="custom-file-input" accept="image/*" v-on:change="sendFile($event)" />

  <button class="buttonPost" v-on:click="sendPost">Publier</button>

</form>
</template>
<script>
  export default {
    name: "createPost",
    data: () => {
      return {
        legend: "",
        image: "",
      };
    },
    methods: {
      sendPost() {
        const formValid = document.getElementByName("createPost")[0].checkValidity();
        if(formValid) {
          this.$emit("post-sent", this.$data);
          document.getElementByName("legend")[0].value = null;
          document.getElementByName("image")[0].value = null;
        }
      },
      sendFile(event) {
        this.$data.image = event.target.files[0];
      }
    },
  };
</script>

<style lang="css">
form {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
textarea {
 width: 1000px;
 height: 200px;
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
  background-color: #FFD7D7;
}
.createPost {
  margin-top : 100px;
}

#custom-file-input {
  display: none;
} 

.button-gif {
  display: block;
  cursor: pointer;
}

</style>