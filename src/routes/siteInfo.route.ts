import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import siteInfoController from '@controllers/siteInfoController';

class SiteInfoRoute implements Routes {
  public path = '/site-info';
  public router = Router();
  public siteInfoController = new siteInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.siteInfoController.getSiteInfo);
  }
}

export default SiteInfoRoute;
