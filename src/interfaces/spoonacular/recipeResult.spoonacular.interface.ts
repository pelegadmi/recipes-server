export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  maxReadyTime: number;
  includeIngredients: [];
  description: string;
  firebaseUserId: string;
}
