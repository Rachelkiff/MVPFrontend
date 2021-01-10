<template>
  <div>
    <router-link to="/about"><strong> About </strong> </router-link>|
    <router-link to="/profilepage"><strong>Profile Page </strong></router-link>|
    <router-link to="/landingpage"><strong> Log out </strong> </router-link>
    <h1><strong>Welcome to my Recipe Share Page! </strong></h1>
    <hr>
   <section style="display: flex; justify-content: center;">>
      <article style="width: 320px; padding: 20px; border: 1px solid #c9c9c9;">
        <img src="https://i.ebayimg.com/images/g/BvIAAOSwnbxdAkeH/s-l300.jpg" alt="Old fashioned recipe card">
        <div v-for="recipe in recipes" :key="recipe[0]">
      <recipe :recipeObject="recipe"></recipe></div>
      <h3><button @click="getRecipes()">Clicky click to view recipes others have shared.</button></h3>
      </article>
      </section>
    <post-recipe />
     <top-page />
     <delete-recipe />
     <hr>
      <p>&copy; 2020 Rachel  Kiffiak</p>
     </div>
</template>

<script>
import axios from "axios";
import PostRecipe from "../components/PostRecipe.vue";
import Recipe from "../components/Recipe.vue";
import DeleteRecipe from "../components/DeleteRecipe.vue"


export default {
  name: "ProfilePage",
   components: {
    PostRecipe,
    Recipe,
    DeleteRecipe
  },
  data() {
    return {
      recipes: []
    };
  },
  
  mounted: function() {
    this.getRecipes();
  },
  methods: {
    getRecipes: function() {
      this.status = "loading";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/recipe_post",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log(response);
          this.recipes = response.data;
          this.status = "Post posted!";
        })
        .catch(error => {
          console.log(error);
          this.status = "There was an error!";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-row {
  display: grid;
  grid-template-columns: repeat(3, 100%);
  justify-content: center;
}

.card {
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}

.card > img:first-child {
  border-radius: 7px 7px 0 0;
  margin-bottom: 20px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  width: 320px;
  height: 180px;
}

.card h3 {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
}

.card h3 em {
  padding: 0.25em;
  background-color: #eddbff;
  border-radius: 4px;
}



button {
  text-decoration: none;
  background-color: rgb(216, 60, 60);
  color: black;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;

  
}


@media only screen and (min-width: 600px) {
  
}
@media only screen and (min-width: 1080px) {
 

 
 
}
</style>

