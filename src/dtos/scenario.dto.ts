import { IsNumber, IsString } from 'class-validator';
import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

export class CreateScenarioDto {
  @IsString()
  public _id: string;

  public severity: Severity;
  public commentType: CommentType;

  @IsNumber()
  public numberOfUsers: Number;

  public messages: [ScenarioMessage];
}
