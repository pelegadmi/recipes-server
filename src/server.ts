import App from './app';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import * as console from 'console';

const main = async () => {
  validateEnv();

  const app = new App([new UsersRoute()]);

  app.listen();
};

main().then(() => {
  console.log('server down.');
});
