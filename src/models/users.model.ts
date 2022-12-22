import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';
import { UserMessage } from '@interfaces/user-message.interface';

const userSchema: Schema = new Schema({
  id: {
    type: Date,
    require: true,
    unique: true,
  },
  scenario_id: {
    type: Date,
    require: true,
    unique: false, // it is not unique per user.
  },
  nickname: {
    type: String,
    require: true,
  },
  scenario_start_time: {
    type: Date,
    required: true,
  },
  messages: {
    type: [], // Array of UserMessage
    require: false, // might be null if user sent nothing.
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
