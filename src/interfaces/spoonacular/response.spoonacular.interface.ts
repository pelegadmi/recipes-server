import { RecipeResult } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';

export interface SpoonacularResponse {
  results: Array<RecipeResult>;
  offset: number;
  number: number;
  totalResults: number;
}
