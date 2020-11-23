/* tslint:disable */
import {
  Data,
  ItemList,
  Pet,
} from '.';

export interface DataModel {
  audioConfig?: Data;
  details?: { [key: string]: any }[];  // { [key: string]: any }[] or object[]
  entities?: number[];
  id?: number;
  imageData?: string;  // base64 user uploaded image string
  imageUrl?: string;  // url to user avatar image
  metadata?: { [key: string]: any };  // { [key: string]: any } or object
  roleId?: number;
  testWithArray?: Pet[] & Data;
  text?: ItemList & Data;
}
