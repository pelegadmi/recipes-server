import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public nickname: string;

  @IsString()
  public _id: string;
}
