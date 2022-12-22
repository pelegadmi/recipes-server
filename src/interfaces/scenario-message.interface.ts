import { User } from '@interfaces/users.interface';

export interface ScenarioMessage {
  Text: string;
  time_offset: Date;
  user: User;
}
