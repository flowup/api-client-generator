/* tslint:disable */
import {
  Document,
} from './..';

export interface DocumentChange {
  document: Document;
  removedTargetIds: number[];
  targetIds: number[];
}
