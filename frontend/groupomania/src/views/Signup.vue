<template>
  <div class="container">
    <LoginNav />
    <form onsubmit="return false">
      <SignupInfo v-on:data-sent="updateDataSignup" />
      <LoginInfo
        validateText="S'inscrire"
        v-on:data-sent="updateDataLogin"
        v-on:request-sent="signup"
      >
        <template v-slot:messageError>{{ message }}</template>
      </LoginInfo>
    </form>
  </div>
</template>

<script>
import LoginNav from "@/components/LoginNav.vue";
import SignupInfo from "@/components/SignupInfo.vue";
import LoginInfo from "@/components/LoginInfo.vue";
export default {
	name: "Signup",
	components: {
		LoginNav,
		SignupInfo,
		LoginInfo,
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
		updateDataSignup(data) {
			this.firstName = data.firstName;
			this.lastName = data.lastName;
		},
		updateDataLogin(data) {
			this.email = data.email;
			this.password = data.password;
    },
		signup() {
			this.$axios
        .post("user/signup", this.$data)
        .then(() => {
          this.$axios.post("user/login", this.$data).then((data) => {
            sessionStorage.setItem("token", data.data.token);
            this.$axios.defaults.headers.common["Authorization"] =
              "Bearer " + data.data.token;
            this.$router.push("Feed");
          });
        })
        .catch((e) => {
          if (e.response.status === 500) {
            this.message = "Erreur serveur";
          }
          sessionStorage.removeItem("token");
        });
    },
  },
  mounted() {
  document.title = "Création de compte";
  },
};
</script>
