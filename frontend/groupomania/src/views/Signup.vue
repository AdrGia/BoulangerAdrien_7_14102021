<template>
	<div class="container">
			<loginNav/>
      <signupInfo v-on:sendRequest="signUp"></signupInfo>
		</div>
</template>

<script>
import LoginNav from "@/components/LoginNav.vue";
import SignupInfo from "@/components/SignupInfo.vue";
export default {
	name: "Signup",
	components: {
		LoginNav,
		SignupInfo,
	},
	data: () => {
		return {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			message: null,
		};
	},
	
	methods: {
    signUp(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.password = data.password;
      this.$axios
          .post("user/signup", this.data)
          .then(() => {
            this.$axios.post('user/signup', this.data).then( (data) => {
              sessionStorage.setItem('token', (data?.token ?? null));
              this.$router.push('Feed');
            })
          })
          .catch((error) => {
            if (error.response.status === 500) {
              this.message = "Erreur du serveur";
            }
            sessionStorage.removeItem('token');
          });
    }
  },
  mounted() {
      document.title = "Création du compte";
    },
};
</script>