import { NextFunction, Request, Response } from 'express';
import SiteInfoService from '@services/siteInfo.service';

class SiteInfoController {
  public graphService = new SiteInfoService();

  public getSiteInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const siteInfo = await this.graphService.findSiteInfo();
      console.log(siteInfo);
      res.status(200).json({ data: siteInfo, message: 'find siteInfo' });
    } catch (error) {
      next(error);
    }
  };
}
export default SiteInfoController;
