import RecipeService from '@services/recipe.service';

class GraphService {
  public recipeService = new RecipeService();

  public async initializeDictionary(): Promise<{ [key: string]: number }> {
    const recipes = await this.recipeService.findAllRecipes();

    const dictionary: { [key: string]: number } = {};

    recipes.forEach(recipe => {
      dictionary[recipe.firebaseUserId]++;
    });

    return dictionary;
  }
}
export default GraphService;
