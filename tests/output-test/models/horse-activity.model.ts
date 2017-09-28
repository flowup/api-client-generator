import { horseTrainingType } from './horsetrainingtype.model'

export interface horseActivity {
  id: string;
  intensity: number;
  horseID: string;
  startDate: string;
  endDate: string;
  type: horseTrainingType;
}
