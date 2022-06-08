<template>
	<div class="container">
			<loginNav/>
      <signupInfo v-on:sendRequest="signUp($event)"></signupInfo>
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
      console.log(data);
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.password = data.password;
      this.isAdmin = data.isAdmin;
      
      this.$axios
          .post("user/signup", data)
          .then((data) => {
            sessionStorage.setItem('token', (data?.token ?? null));
            this.$router.push('Feed');
          })
          .catch((error) => {
            if (error.response.status === 500) {
              this.message = "Erreur du serveur";
            }
            sessionStorage.removeItem('token');
          });

      console.log(this.data);
    }
  },
  mounted() {
      document.title = "Création du compte";
    },
};
</script>