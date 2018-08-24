/* tslint:disable */
import {
  TransactionOptions,
} from '.';

/**
 * The request for Firestore.BeginTransaction.
 */
export interface BeginTransactionRequest {
  options: TransactionOptions;  // The options for the transaction.Defaults to a read-write transaction.
}
