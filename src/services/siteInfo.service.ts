import siteInfoModel from '@models/siteInfo.model';
import { SiteInfo } from '@interfaces/siteInfo.interface';
class SiteInfoService {
  public recipesComments = siteInfoModel;

  public async findSiteInfo(): Promise<SiteInfo> {
    const x = await this.recipesComments.find();
    return x[0];
  }
  public async initializeSiteInfo(): Promise<SiteInfo> {
    const x = await this.recipesComments.create(new Date(Date.now()));
    return x[0];
  }
}

export default SiteInfoService;
