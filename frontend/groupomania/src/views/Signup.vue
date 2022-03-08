<template>
	<div class="container">
			<loginNav/>
			<form>
				<signupInfo></signupInfo>
			</form>
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
		udpateData(data) {
			this.firstName = data.firstName;
			this.lastName = data.lastName;
			this.email = data.email;
			this.password = data.password;
		},
		
		mounted() {
			document.title = "Création du compte";
		},
	},
};
</script>