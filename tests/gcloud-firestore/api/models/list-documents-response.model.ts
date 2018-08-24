/* tslint:disable */
import {
  Document,
} from '.';

/**
 * The response for Firestore.ListDocuments.
 */
export interface ListDocumentsResponse {
  documents: Document[];  // The Documents found.
  nextPageToken: string;  // The next page token.
}
