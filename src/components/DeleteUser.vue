<template>
  <div id="grid-container">
    <h2>Delete your profile</h2>
    <p>Enter your username</p>
    <input type="username" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="password" id="passworddelete-input" v-model="password" />
    <button id="delete-button">
      <h3 @click="deleteUser">Delete Profile</h3>
    </button>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "deleteUsers",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    deleteUser: function() {
      axios
        .request({
          method: "DELETE",
          url: " http://127.0.0.1:5000/api/user",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("session"),
            password: this.password,
            username: this.username
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("session");
          this.$router.push("/signup");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scss scoped></style>