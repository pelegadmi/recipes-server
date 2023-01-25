import { model, Schema, Document } from 'mongoose';
import { Recipe } from '@interfaces/spoonacular/recipeResult.spoonacular.interface';

const recipeSchema: Schema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  imageType: {
    type: String,
    require: true,
  },
});

const recipeModel = model<Recipe & Document>('Recipe', recipeSchema);

export default recipeModel;
