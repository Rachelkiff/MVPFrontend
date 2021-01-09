<template>
  <div id="body"></div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: " http://127.0.0.1:5000/api/login",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          //check if login token sent
          this.$router.push("/profilepage");
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          //send user to "home page"
        })
        .catch(error => {
          // show user login failure
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
