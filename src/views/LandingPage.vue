<template>
  <div class="background">
    <h1></h1>
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
.background {
  margin: 0;
  padding: 0;
}

@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 1080px) {
}
</style>
