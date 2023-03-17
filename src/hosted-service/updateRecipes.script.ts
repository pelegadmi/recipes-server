import RecipeRetriever from '@utils/RecipeRetriever/recipeRetriever.util';
import RecipeService from '@services/recipe.service';

const updateRecipeQuery = async (recipeQuery: string) => {
  const recipeRetriever = new RecipeRetriever();
  const recipeService = new RecipeService();

  const recipes = await recipeRetriever.retrieveRecipes(recipeQuery);

  for (const recipe of recipes) {
    const recipeInfo = await recipeRetriever.retrieveRecipeInformation(recipe);
    await recipeService.createRecipe(recipeInfo);
  }
};

const updateRecipes = async recipesQueries => {
  console.log('Recipes are being Updated');

  for (const recipeQuery of recipesQueries) {
    await updateRecipeQuery(recipeQuery);
  }

  console.log('Updated Successfully');
};

export default updateRecipes;
