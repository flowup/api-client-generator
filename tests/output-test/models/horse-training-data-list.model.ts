import { horseTrainingData } from './horsetrainingdata.model'

export interface horseTrainingDataList {
  totalElements: string;
  totalPages: string;
  numberOfElements: string;
  data: horseTrainingData[];
}
