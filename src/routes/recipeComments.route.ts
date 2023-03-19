import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import recipeCommentsController from '@controllers/recipeComments.controller';

class RecipeCommentsRoute implements Routes {
  public path = '/recipe-comments';
  public router = Router();
  public recipesCommentsController = new recipeCommentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.recipesCommentsController.getRecipesComments);
    this.router.get(`${this.path}/:id`, this.recipesCommentsController.getRecipeComments);
    this.router.post(`${this.path}/:id`, this.recipesCommentsController.addComment);
  }
}

export default RecipeCommentsRoute;
