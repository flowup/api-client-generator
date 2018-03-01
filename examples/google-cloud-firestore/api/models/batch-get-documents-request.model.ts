/* tslint:disable */
import {
  DocumentMask,
  TransactionOptions,
} from './..';

export interface BatchGetDocumentsRequest {
  documents: string[];
  mask: DocumentMask;
  newTransaction: TransactionOptions;
  readTime: string;
  transaction: string;
}
