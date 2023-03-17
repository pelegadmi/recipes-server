import { IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  public title: string;
  @IsString()
  public image: string;
  @IsString()
  public imageType: string;
  @IsString()
  public includeIngredients: [];
  public maxReadyTime: number;
  @IsString()
  public description: string;
  @IsString()
  public firebaseUserId: string;
}
