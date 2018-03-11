/* tslint:disable */
import {
  IndexField,
} from './..';

export interface Index {
  collectionId: string;
  fields: IndexField[];
  name: string;
  state: string;
}
