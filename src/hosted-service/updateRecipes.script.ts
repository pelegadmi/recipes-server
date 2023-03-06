import RecipeRetriever from '@utils/RecipeRetriever/recipeRetriever.util';
import RecipeService from '@services/recipe.service';

const updateRecipeQuery = (recipeQuery: string) => {
  const recipeRetriever = new RecipeRetriever();
  const recipeService = new RecipeService();

  recipeRetriever.retrieve(recipeQuery).then(recipes =>
    recipes.forEach(recipe => {
      recipeService
        .createRecipe(recipe)
        .then(() => {
          console.log('${recipeQuery} recipe added');
        })
        .then(() => {
          console.log('${recipeQuery} recipe already exists');
        });
    }),
  );
};

const updateRecipes = recipesQueries => {
  console.log('Recipes are being Updated');

  recipesQueries.forEach(recipeQuery => updateRecipeQuery(recipeQuery));

  console.log('Updated Successfully');
};

export default updateRecipes;
