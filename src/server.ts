import App from './app';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import RecipesRoute from '@routes/recipe.route';
import updateRecipes from '@/hosted-service/updateRecipes.script';
import GraphRoute from '@routes/graph.route';
import RecipeCommentsRoute from '@routes/recipeComments.route';

const recipesQueries = ['pasta', 'chicken', 'rice', 'pizza', 'soup', 'sushi', 'noodles', 'fish', 'meat', 'hummus', 'shrimps', 'calamari'];

const main = async () => {
  validateEnv();

  const app = new App([new UsersRoute(), new RecipesRoute(), new GraphRoute(), new RecipeCommentsRoute()]);

  app.listen();
};

main().then(() => {
  updateRecipes(recipesQueries);
});
