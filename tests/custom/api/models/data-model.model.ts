/* tslint:disable */
import {
  Data,
  ItemList,
  Pet,
} from '.';

export interface DataModel {
  audioConfig?: Data;
  entities?: number[];
  id?: number;
  imageData?: string;  // base64 user uploaded image string
  imageUrl?: string;  // url to user avatar image
  roleId?: number;
  testWithArray?: Pet[] & Data;
  text?: ItemList & Data;
}
