import App from './app';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import RecipesRoute from '@routes/recipe.route';

const main = async () => {
  validateEnv();

  const app = new App([new UsersRoute(), new RecipesRoute()]);

  app.listen();
};

main().then(() => {
  // console.log('server up.');
});
