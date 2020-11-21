/* tslint:disable */
import {
  Right,
} from '.';

export interface InterfaceWithArrayOfDictionariesOfArrayOfRights {
  foo?: { [key: string]: Right[] }[];  // { [key: string]: Right[] }[]
}
