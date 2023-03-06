import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';

const axios = require('axios');

class RecipeRetriever {
  public async retrieve(
    recipe: string,
    // cuisine = 'italian',
    // excludeCuisine = 'greek',
    // diet = 'vegetarian',
    // intolerances = 'gluten',
    // equipment = 'pan',
    // includeIngredients = 'tomato,cheese',
    // excludeIngredients = 'eggs',
    // type = 'main course',
    // instructionsRequired = true,
    // fillIngredients = false,
    // addRecipeInformation = false,
  ): Promise<Array<Recipe>> {
    const options = {
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        query: recipe,
        // cuisine: { cuisine },
        // excludeCuisine: { excludeCuisine },
        // diet: { diet },
        // intolerances: { intolerances },
        // equipment: { equipment },
        // includeIngredients: { includeIngredients },
        // excludeIngredients: { excludeIngredients },
        // type: { type },
        // instructionsRequired: { instructionsRequired },
        // fillIngredients: { fillIngredients },
        // addRecipeInformation: { addRecipeInformation },
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
