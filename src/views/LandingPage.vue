<template>
<div class="routes" id="wrap">
   
    <signup-page></signup-page>
    <login-page></login-page>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupPage from "../components/SignupPage.vue";
import LoginPage from "../components/LoginPage.vue";
export default {
  name: "LandingPage",

  components: {
    SignupPage,
    LoginPage
  }
};
</script>

<style lang="scss" scoped>
#wrap { 
	width: 800px; 
	margin: 0 auto; 
  text-align: center;
}
.routes{
  font-family: 'EB Garamond', serif;
  justify-content: center;
}


@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 1080px) {
}
</style>
