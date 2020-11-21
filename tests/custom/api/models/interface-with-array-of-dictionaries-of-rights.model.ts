/* tslint:disable */
import {
  Right,
} from '.';

export interface InterfaceWithArrayOfDictionariesOfRights {
  foo?: { [key: string]: Right }[];  // { [key: string]: Right }[]
}
