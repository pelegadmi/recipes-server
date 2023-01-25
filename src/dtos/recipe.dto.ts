import { IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  public title: string;
  @IsString()
  public image: string;
  @IsString()
  public imageType: string;
}
