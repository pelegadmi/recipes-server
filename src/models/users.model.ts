import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';
import { UserType } from '@/enums/userType.enum';

const userSchema: Schema = new Schema({
  nickname: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    enum: UserType,
    require: true,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
