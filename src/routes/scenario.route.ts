import { Router } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ScenariosController from '@controllers/scenarios.controller';

class ScenarioRoute implements Routes {
  public path = '/scenarios';
  public router = Router();
  public usersController = new ScenariosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getScenarios);
    this.router.get(`${this.path}/:id`, this.usersController.getScenarioById);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createScenario);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateScenario);
    this.router.delete(`${this.path}/:id`, this.usersController.deleteScenario);
  }
}

export default ScenarioRoute;
