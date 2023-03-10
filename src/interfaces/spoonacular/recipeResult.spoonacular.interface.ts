export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  maxReadyTime: number;
  includeIngredients: Array<string>;
}
