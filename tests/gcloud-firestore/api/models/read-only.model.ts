/* tslint:disable */

/**
 * Options for a transaction that can only be used to read documents.
 */
export interface ReadOnly {
  readTime: string;  // Reads documents at the given time.This may not be older than 60 seconds.
}
