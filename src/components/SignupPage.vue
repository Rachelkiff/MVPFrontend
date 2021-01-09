<template>
  
    <div class="container" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h1>Welcome</h1>
            <h3>Login</h3>
            <button class="invert" id="signIn" @click="signUp = !signUp">
              Sign In
            </button>
          </div>
          <div class="overlay-right">
            <h1>Welcome</h1>
            <h3>Enter your information to sign up!</h3>
            <button class="invert" id="signUp" @click="signUp = !signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="javascript:void(0)">
        <h2>Create Login</h2>
        <h3>Use your email to register</h3>
        <p>Username</p>
        <input type="text" v-model="username" />
        <p>Email</p>
        <input type="email" v-model="email" />
        <p>Password</p>
        <input type="password" v-model="password" />
        <button @click="signupUser">Sign up</button>
      </form>
      <form class="sign-in" action="javascript:void(0)">
        <h1>Sign In</h1>
        <h3>Use your email to sign in</h3>
        <p>Email</p>
        <input type="email" v-model="email" />
        <p>Password</p>
        <input type="password" v-model="password" />
        <button @click="loginUser">Sign in</button>
      </form>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data: () => {
    return {
      signUp: false,
      email: "",
      username: "",
      password: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/login",
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
    },
    signupUser: function() {
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/user",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          this.$router.push("/profilepage");
          console.log(response);
          cookies.set("session", response.data.loginToken);
          cookies.set("userId", response.data.userId);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(
      to botton right,
      rgb(235, 88, 88),
      rgb(224, 84, 84)
    );
    color: white;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-20%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
  h1 {
    margin: 0;
    color: black;
  }
  h3 {
    margin: 20px 0 30px;
    color: black;
  }
  a {
    color: black;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;
  }
  p {
    margin: 0;
    color: black;
  }
 
  button {
    border-radius: 20px;
    border: 1px solid rgb(235, 88, 88);
    background-color: rgb(224, 84, 84);
    color: rgb(32, 14, 14);
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    &:active {
      transform: scale(0.9);
    }
    &:focus {
      outline: none;
    }
  }
  button.invert {
    background-color: transparent;
    border-color: rgb(226, 47, 47);
  }
  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: linear-gradient(
      to bottom,
      rgb(231, 101, 101),
      rgb(241, 198, 198)
    );
    transition: all 0.5s ease-in-out;
  }
  div {
    font-size: 1rem;
  }
  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>
