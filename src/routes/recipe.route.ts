import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import RecipesController from '@controllers/recipe.controller';

class RecipesRoute implements Routes {
  public path = '/recipes';
  public router = Router();
  public recipesController = new RecipesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.recipesController.getRecipes);
    this.router.get(`${this.path}/:id`, this.recipesController.getRecipeById);
    this.router.post(`${this.path}`, this.recipesController.createRecipe);
    this.router.put(`${this.path}/:id`, this.recipesController.updateRecipe);
    this.router.delete(`${this.path}/:id`, this.recipesController.deleteRecipe);
  }
}

export default RecipesRoute;
