import { NextFunction, Request, Response } from 'express';
import RecipeService from '@services/recipe.service';
import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';
import { CreateRecipeDto } from '@dtos/recipe.dto';

class RecipesController {
  public recipeService = new RecipeService();

  public getRecipes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRecipesData: Recipe[] = await this.recipeService.findAllRecipes();
      console.log(findAllRecipesData);
      res.status(200).json({ data: findAllRecipesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRecipesByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const findOneRecipeData: Recipe[] = await this.recipeService.findRecipeById(id);

      res.status(200).json({ data: findOneRecipeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipeDto: CreateRecipeDto = req.body;
      console.log(req.body);
      const createRecipeData: Recipe = await this.recipeService.createRecipe(recipeDto);

      res.status(201).json({ data: createRecipeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const recipeDto: CreateRecipeDto = req.body;
      const recipe: Recipe = await this.recipeService.updateRecipe(id, recipeDto);

      res.status(200).json({ data: recipe, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
  public deleteRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const recipe: Recipe = await this.recipeService.deleteRecipe(userId);

      res.status(200).json({ data: recipe, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default RecipesController;
