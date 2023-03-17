import { UserType } from '@/enums/userType.enum';

export interface User {
  nickname: string;
  password: string;
  userType: UserType;
}
