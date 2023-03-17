import App from './app';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import RecipesRoute from '@routes/recipe.route';
import updateRecipes from '@/hosted-service/updateRecipes.script';
import GraphRoute from '@routes/graph.route';

const recipesQueries = ['pasta', 'chicken', 'rice', 'pizza', 'soup', 'sushi', 'noodles'];

const main = async () => {
  validateEnv();

  const app = new App([new UsersRoute(), new RecipesRoute(), new GraphRoute()]);

  app.listen();
};

main().then(() => {
  updateRecipes(recipesQueries);
});
