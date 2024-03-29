import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import mongoose from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, LOG_FORMAT } from '@config';
import { dbConnection } from '@databases';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';
import http from 'http';
import { Server } from 'socket.io';
import * as console from 'console';
import SiteInfoService from '@services/siteInfo.service';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeSocket();
    this.initializeErrorHandling();
    // this.initializeSiteInfo();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`====================================`);
      logger.info(`========= ENV: ${this.env} =========`);
      logger.info(`== App listening on the port ${this.port} ==`);
      logger.info(`====================================`);
    });
  }

  public getServer() {
    return this.app;
  }
  public async initializeSiteInfo() {
    const siteInfoService = new SiteInfoService();
    const siteInfo = await siteInfoService.initializeSiteInfo();
    logger.info(`========= ENV: ${siteInfo.date} =========`);
  }

  private initializeSocket() {
    const server = http.createServer(this.app);
    const io = new Server(server, { cors: { origins: '*:*' } });
    let userCounter = 0;
    io.on('connection', socket => {
      userCounter++;
      io.emit('counter', userCounter);
      console.log('client connected');
      socket.on('disconnect', () => {
        userCounter--;
        io.emit('counter', userCounter);
        console.log('client disconnected');
      });
    });
    server.listen('8080', () => {
      console.log(``);
    });
  }

  private connectToDatabase() {
    const db = mongoose.connection;

    db.on('connected', () => {
      console.log('DB connected!');
    });
    db.on('disconnected', () => {
      console.log('DB disconnected! Trying to reconnect...');
      mongoose.connect(dbConnection.url, dbConnection.options);
    });
    db.on('error', error => {
      console.log('DB connection error : ' + error);
    });

    mongoose.connect(dbConnection.url, dbConnection.options); //.catch(error => console.log('DB connection error : ' + error));
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT, { stream }));
    this.app.use(cors());
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'Recipes Server - REST API',
          version: '1.0.0',
          description: 'Recipes Server Docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
