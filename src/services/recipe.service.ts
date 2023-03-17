import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import recipeModel from '@models/recipe.model';
import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';
import { CreateRecipeDto } from '@dtos/recipe.dto';

class RecipeService {
  public recipes = recipeModel;

  public async findAllRecipes(): Promise<Recipe[]> {
    return this.recipes.find();
  }

  public async findRecipeById(id: string): Promise<Recipe[]> {
    if (isEmpty(id)) throw new HttpException(400, 'id is empty');

    const recipe: Recipe[] = await this.recipes.find({ firebaseUserId: id.toString() }); // todo validate 'id' || '_id'
    if (!recipe) throw new HttpException(409, "Recipe doesn't exist");

    return recipe;
  }

  public async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    if (isEmpty(createRecipeDto)) throw new HttpException(400, 'createUserDto is empty');
    return await this.recipes.create({
      ...createRecipeDto,
    });
  }

  public async updateRecipe(id: string, createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    if (isEmpty(createRecipeDto)) throw new HttpException(400, 'createRecipeDto is empty');

    const updateRecipeById: Recipe = await this.recipes.findByIdAndUpdate(id, {
      ...createRecipeDto,
    });

    if (!updateRecipeById) throw new HttpException(409, "recipe doesn't exist");

    return updateRecipeById;
  }

  public async deleteRecipe(id: string): Promise<Recipe> {
    const deleteRecipeById: Recipe = await this.recipes.findByIdAndDelete(id);
    if (!deleteRecipeById) throw new HttpException(409, "Recipe doesn't exist");

    return deleteRecipeById;
  }
}

export default RecipeService;
