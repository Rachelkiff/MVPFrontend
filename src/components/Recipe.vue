<template>
  <div>
    <h2>{{ recipeObject[1] }}</h2>
    <delete-recipe
      v-if="isOwned"
      :recipeId="recipeObject[0]"
    ></delete-recipe>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import DeleteRecipe from "./DeleteRecipe.vue";
export default {
  name: "recipe-page",
  components: {
    DeleteRecipe
  },
  props: {
    recipeObject: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOwned: cookies.get("recipeId") == this.recipeObject[0]
    };
  }
};
</script>

<style lang="scss" scoped></style>