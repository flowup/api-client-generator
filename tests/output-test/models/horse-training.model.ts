import { horseTrainingData } from './horsetrainingdata.model'

export interface horseTraining {
  id: string;
  horseID: string;
  userId: string;
  length: string;
  distance: string;
  maxSpeed: string;
  averageSpeed: string;
  maxPulse: string;
  averagePulse: string;
  burntCalories: string;
  start: string;
  end: string;
  weather: string;
  temperature: string;
  location: string;
  training_data: horseTrainingData[];
}
