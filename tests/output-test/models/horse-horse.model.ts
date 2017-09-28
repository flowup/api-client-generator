import { horseHorse } from './horsehorse.model'
import { horseHorseSharing } from './horsehorsesharing.model'
import { horseTraining } from './horsetraining.model'
import { horseFoodDosage } from './horsefooddosage.model'

export interface horseHorse {
  id: string;
  name: string;
  state: string;
  feiId: string;
  ueln: string;
  chipId: string;
  breed: string;
  height: number;
  length: number;
  girth: number;
  age: string;
  sex: string;
  weight: number;
  origin: string;
  color: string;
  breeder: string;
  photo: string;
  birthDate: string;
  pedigree: string;
  nationalId: string;
  license: string;
  father: horseHorse;
  mother: horseHorse;
  sharings: horseHorseSharing[];
  trainings: horseTraining[];
  foodDosages: horseFoodDosage[];
}
