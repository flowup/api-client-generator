/* tslint:disable */
import {
  Mouse,
  pet,
} from './..';

export interface Cat extends pet {
  age: number;
  eaten: Mouse[];
  hunts: boolean;
}
