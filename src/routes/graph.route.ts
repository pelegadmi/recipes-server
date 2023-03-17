import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import GraphController from '@controllers/graph.controller';

class GraphRoute implements Routes {
  public path = '/graph';
  public router = Router();
  public graphController = new GraphController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.graphController.getDictionary);
  }
}

export default GraphRoute;
