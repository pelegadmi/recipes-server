import { Document, model, Schema } from 'mongoose';
import { RecipeComments } from '@interfaces/spoonacular/recipeComments.interface';

const recipeCommentSchema: Schema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  comments: {
    type: [],
    require: true,
  },
});

const recipeCommentModel = model<RecipeComments & Document>('RecipeComments', recipeCommentSchema);

export default recipeCommentModel;
