/* tslint:disable */
import {
  Document,
} from './..';

export interface BatchGetDocumentsResponse {
  found: Document;
  missing: string;
  readTime: string;
  transaction: string;
}
