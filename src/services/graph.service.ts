import RecipeService from '@services/recipe.service';

class GraphService {
  public recipeService = new RecipeService();

  public async initializeDictionary() {
    const numberOfRecipesPerUserId = await this.recipeService.findNumberOfRecipesPerUserId();

    return numberOfRecipesPerUserId;
  }
}
export default GraphService;
