/* tslint:disable */
import {
  ReadOnly,
  ReadWrite,
} from '.';

/**
 * Options for creating a new transaction.
 */
export interface TransactionOptions {
  readOnly: ReadOnly;  // The transaction can only be used for read operations.
  readWrite: ReadWrite;  // The transaction can be used for both read and write operations.
}
