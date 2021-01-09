<template>
  <div>
    <section
      style="display: flex; justify-content: center; padding: 20px; margin: 20px"
    >
      <article style="width: 320px; padding: 20px; border: 1px solid #c9c9c9;">
        <img
          src="https://i.pinimg.com/236x/7d/55/36/7d553667b713a176c9f107eac871052c--retro-ads-retro-vintage.jpg"
          alt="Old fashioned recipe card"
        />
        <h2>Enter a Recipe that you would like to share.</h2>
        <textarea v-model="recipeContent">Enter your Recipe</textarea>
        <button @click="uploadRecipe()">Submit</button>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      recipeContent: "",
    };
  },
  methods: {
    uploadRecipe: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/recipe_post",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.recipeContent,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-row {
  display: grid;
  grid-template-columns: repeat(2, 100%);
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
  color: black;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
}

.card h3 em {
  padding: 0.25em;
  background-color: #eddbff;
  border-radius: 4px;
}

.card p {
  color: #757575;
  line-height: 1.5;
}
textarea {
  display: inline-block;
  justify-content: center;
  border-radius: 4px;
}

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
