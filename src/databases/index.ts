// import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url: 'mongodb+srv://pelegadmi:Aa123456@dev.qf5bt8j.mongodb.net/?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
    keepAlive: true,
  },
};
