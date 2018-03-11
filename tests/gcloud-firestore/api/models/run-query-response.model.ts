/* tslint:disable */
import {
  Document,
} from './..';

export interface RunQueryResponse {
  document: Document;
  readTime: string;
  skippedResults: number;
  transaction: string;
}
