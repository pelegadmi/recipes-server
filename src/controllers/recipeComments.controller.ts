import { NextFunction, Request, Response } from 'express';
import RecipeCommentsService from '@services/recipeComments.service';
import { RecipeComments } from '@interfaces/spoonacular/recipeComments.interface';

class RecipesCommentsController {
  public recipeCommentService = new RecipeCommentsService();

  public getRecipesComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRecipesCommentsData: RecipeComments[] = await this.recipeCommentService.findAllRecipesComments();
      console.log(findAllRecipesCommentsData);
      res.status(200).json({ data: findAllRecipesCommentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRecipeComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const findOneRecipeCommentData: RecipeComments = await this.recipeCommentService.findRecipeComments(id);

      res.status(200).json({ data: findOneRecipeCommentData, message: 'findOne' });
    } catch (error) {
      res.status(400).json({ message: 'unable to get' });
      next(error);
    }
  };

  public addComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const comment: {x:string} = req.body;
      console.log(req.body);
      const createRecipeCommentData: RecipeComments = await this.recipeCommentService.addComment(comment, id);

      res.status(200).json({ data: createRecipeCommentData, message: 'created' });
    } catch (error) {
      res.status(400).json({ message: 'unable to get' });
      next(error);
    }
  };
}

export default RecipesCommentsController;
