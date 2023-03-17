import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';

const axios = require('axios');

class RecipeRetriever {
  public async retrieveRecipeInformation(recipe: Recipe) {
    const options = {
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/' + recipe.id.toString() + '/information',
      headers: {
        'x-api-key': '59a461de476c457bbe9357a2a3136efa',
      },
    };

    const response = await axios.request(options);

    const recipeInfo: Recipe = {
      ...recipe,
      includeIngredients: response.data.extendedIngredients,
      maxReadyTime: response.data.readyInMinutes,
      description: response.data.summary,
    };
    return recipeInfo;
  }

  public async retrieveRecipes(recipe: string): Promise<Array<Recipe>> {
    const options = {
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        query: recipe,
      },
      headers: {
        'x-api-key': '59a461de476c457bbe9357a2a3136efa',
      },
    };

    const response = await axios.request(options);
    const results = Array.from(response.data.results);
    return results as Array<Recipe>;
  }
}

export default RecipeRetriever;
