import { model, Schema, Document } from 'mongoose';
import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { Scenario } from '@interfaces/scenario.interface';

const scenarioSchema: Schema = new Schema({
  id: {
    type: Date,
    require: true,
    unique: true,
  },
  severity: {
    type: Severity,
    require: true,
  },
  comment_type: {
    type: CommentType,
    require: true,
  },
  number_of_users: {
    type: Number,
    required: true,
  },
  messages: {
    type: [], // Array of ScenarioMessages
    require: false, // might be null if user sent nothing.
  },
});

const scenarioModel = model<Scenario & Document>('Scenario', scenarioSchema);

export default scenarioModel;
