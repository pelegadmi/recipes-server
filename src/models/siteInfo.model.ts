import { Document, model, Schema } from 'mongoose';
import { SiteInfo } from '@interfaces/siteInfo.interface';

const SiteInfoSchema: Schema = new Schema({
  date: {
    type: Date,
    require: true,
  },
});

const siteInfoModel = model<SiteInfo & Document>('SiteInfo', SiteInfoSchema);

export default siteInfoModel;
