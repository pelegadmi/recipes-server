import { UserType } from '@/enums/userType.enum';

export interface User {
  // _id: string;
  nickname: string;
  password: string;
  userType: UserType;
}
