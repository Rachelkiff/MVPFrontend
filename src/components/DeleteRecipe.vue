<template>
  <div>
    <h2>Delete a recipe you have entered.</h2>
    <button @click="deleteRecipe">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "DeleteRecipe",

  props: {
    recipeId: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteRecipe: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/recipe_post",
          method: "Delete",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            recipeId: this.recipeId,
            loginToken: cookies.get("session")
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  text-decoration: none;
  background-color: rgb(216, 60, 60);
  color: black;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
  font-family:  'Lobster Two', cursive;
  text-align: center;

}
</style>