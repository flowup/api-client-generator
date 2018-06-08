/* tslint:disable */
import {
  pet,
} from './..';

export interface Dog extends pet {
  bark: boolean;
  breed: string;
}
