import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';

export interface SpoonacularResponse {
  results: Array<Recipe>;
  offset: number;
  number: number;
  totalResults: number;
}
