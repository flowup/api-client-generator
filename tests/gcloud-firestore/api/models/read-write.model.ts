/* tslint:disable */

/**
 * Options for a transaction that can be used to read and write documents.
 */
export interface ReadWrite {
  retryTransaction: string;  // An optional transaction to retry.
}
