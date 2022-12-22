import { NextFunction, Request, Response } from 'express';
import ScenarioService from '@services/scenarios.service';
import { Scenario } from '@interfaces/scenario.interface';
import { CreateScenarioDto } from '@dtos/scenario.dto';

class ScenarioController {
  public scenarioService = new ScenarioService();

  public getScenarios = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: Scenario[] = await this.scenarioService.findAllScenarios();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getScenarioById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarioId: string = req.params.id;
      const findOneScenarioData: Scenario = await this.scenarioService.findScenarioById(scenarioId);

      res.status(200).json({ data: findOneScenarioData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createScenario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateScenarioDto = req.body;
      const createScenarioData: Scenario = await this.scenarioService.createScenario(userData);

      res.status(201).json({ data: createScenarioData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateScenario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: CreateScenarioDto = req.body;
      const updateUserData: Scenario = await this.scenarioService.updateScenario(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteScenario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteUserData: Scenario = await this.scenarioService.deleteScenario(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ScenarioController;
