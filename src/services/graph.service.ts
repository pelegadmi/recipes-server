import RecipeService from '@services/recipe.service';
import RecipeCommentsService from '@services/recipeComments.service';

class GraphService {
  public recipeService = new RecipeService();
  public recipeCommentsService = new RecipeCommentsService();

  public async initializeDictionary() {
    return await this.recipeService.findNumberOfRecipesPerUserId();
  }

  public async getCommentCountPerRecipe() {
    return this.recipeCommentsService.recipesComments.aggregate([
      {
        $project: {
          id: '$id',
          count: {
            $size: '$comments',
          },
        },
      },
      {
        $lookup: {
          from: 'recipes',
          localField: 'id',
          foreignField: 'id',
          as: 'recipe',
        },
      },
      {
        $project: {
          id: '$id',
          title: {
            $first: '$recipe.title',
          },
          count: '$count',
        },
      },
    ]);
  }
}

export default GraphService;
