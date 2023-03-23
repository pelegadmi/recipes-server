import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import recipeCommentModel from '@models/comment.model';
import { RecipeComments } from '@interfaces/spoonacular/recipeComments.interface';

class RecipeCommentsService {
  public recipesComments = recipeCommentModel;

  public async findAllRecipesComments(): Promise<RecipeComments[]> {
    return this.recipesComments.find();
  }

  public async findRecipeComments(id: string): Promise<RecipeComments> {
    if (isEmpty(id)) throw new HttpException(400, 'id is empty');

    const recipeComments: RecipeComments = await this.recipesComments.findOne({ id: id });
    if (!recipeComments) throw new HttpException(409, "Recipe Comment doesn't exist");

    return recipeComments;
  }

  private async createRecipeComment(recipeComments: RecipeComments): Promise<RecipeComments> {
    if (isEmpty(recipeComments)) throw new HttpException(400, 'createUserDto is empty');
    return await this.recipesComments.create({
      ...recipeComments,
    });
  }

  public async addComment(comment: { x: string }, recipeId: string): Promise<RecipeComments> {
    if (isEmpty(comment)) throw new HttpException(400, 'comment is empty');

    try {
      const recipeComment = await this.findRecipeComments(recipeId);
      recipeComment.comments.push(comment.x);
      return this.recipesComments.findByIdAndUpdate({ _id: recipeComment._id }, recipeComment, { new: true });
    } catch (_) {
      return await this.createRecipeComment({ id: recipeId, comments: new Array<string>(comment.x) });
    }
  }
}

export default RecipeCommentsService;
