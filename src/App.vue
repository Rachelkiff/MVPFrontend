<template>

  <div id="app">
    <div id="nav">
      </div>
    <router-view />

  </div>
</template>


<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap');
#app {
font-family: 'EB Garamond', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: black;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
