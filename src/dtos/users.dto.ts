import { IsString } from 'class-validator';
import { UserType } from '@/enums/userType.enum';

export class CreateUserDto {
  @IsString()
  public nickname: string;
  @IsString()
  public password: string;
  public userType: UserType;
}

export class UpdateUserDto {
  @IsString()
  public nickname: string;
  @IsString()
  public password: string;
  public userType: UserType;
}
