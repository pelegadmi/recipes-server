export interface User {
  _id: string;
  scenario_id: string;
  nickname: string;
  scenario_start_time: Date;
  messages: [string];
}
