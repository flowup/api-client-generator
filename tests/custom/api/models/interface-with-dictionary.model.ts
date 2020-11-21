/* tslint:disable */
import {
  Customer,
} from '.';

export interface InterfaceWithDictionary {
  customers?: { [key: string]: Customer };  // { [key: string]: Customer }
  id: string;
}
