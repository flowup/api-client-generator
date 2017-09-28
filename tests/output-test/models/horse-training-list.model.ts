import { horseTraining } from './horsetraining.model'

export interface horseTrainingList {
  totalElements: string;
  totalPages: string;
  numberOfElements: string;
  last: boolean;
  content: horseTraining[];
}
