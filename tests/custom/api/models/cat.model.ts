/* tslint:disable */
import {
  Mouse,
  Pet,
} from './..';

export interface Cat extends Pet {
  age: number;
  eaten: Mouse[];
  hunts: boolean;
}
