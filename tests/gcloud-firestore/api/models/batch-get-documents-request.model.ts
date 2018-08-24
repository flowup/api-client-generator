/* tslint:disable */
import {
  DocumentMask,
  TransactionOptions,
} from '.';

/**
 * The request for Firestore.BatchGetDocuments.
 */
export interface BatchGetDocumentsRequest {
  documents: string[];  // The names of the documents to retrieve. In the format:`projects/{project_id}/databases/{database_id}/documents/{document_path}`.The request will fail if any of the document is not a child resource of thegiven `database`. Duplicate names will be elided.
  mask: DocumentMask;  // The fields to return. If not set, returns all fields.If a document has a field that is not present in this mask, that field willnot be returned in the response.
  newTransaction: TransactionOptions;  // Starts a new transaction and reads the documents.Defaults to a read-only transaction.The new transaction ID will be returned as the first response in thestream.
  readTime: string;  // Reads documents as they were at the given time.This may not be older than 60 seconds.
  transaction: string;  // Reads documents in a transaction.
}
