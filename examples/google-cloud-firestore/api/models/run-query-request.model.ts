/* tslint:disable */
import {
  StructuredQuery,
  TransactionOptions,
} from './..';

export interface RunQueryRequest {
  newTransaction: TransactionOptions;
  readTime: string;
  structuredQuery: StructuredQuery;
  transaction: string;
}
