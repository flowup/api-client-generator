/* tslint:disable */
import {
  StructuredQuery,
  TransactionOptions,
} from '.';

/**
 * The request for Firestore.RunQuery.
 */
export interface RunQueryRequest {
  newTransaction?: TransactionOptions;  // Starts a new transaction and reads the documents.Defaults to a read-only transaction.The new transaction ID will be returned as the first response in thestream.
  readTime?: string;  // Reads documents as they were at the given time.This may not be older than 60 seconds.
  structuredQuery?: StructuredQuery;  // A structured query.
  transaction?: string;  // Reads documents in a transaction.
}
