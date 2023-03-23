import graphService from '@services/graph.service';
import { NextFunction, Request, Response } from 'express';

class GraphController {
  public graphService = new graphService();

  public getDictionary = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const graphData: { [key: string]: number } = await this.graphService.initializeDictionary();
      console.log(graphData);
      res.status(200).json({ data: graphData, message: 'graphData dictionary' });
    } catch (error) {
      next(error);
    }
  };
  public getCommentCountPerRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const graphData = await this.graphService.getCommentCountPerRecipe();
      console.log(graphData);
      res.status(200).json({ data: graphData, message: 'get Comment Count Per Recipe' });
    } catch (error) {
      next(error);
    }
  };
}
export default GraphController;
