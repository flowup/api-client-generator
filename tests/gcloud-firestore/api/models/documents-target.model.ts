/* tslint:disable */

/**
 * A target specified by a set of documents names.
 */
export interface DocumentsTarget {
  documents?: string[];  // The names of the documents to retrieve. In the format:`projects/{project_id}/databases/{database_id}/documents/{document_path}`.The request will fail if any of the document is not a child resource ofthe given `database`. Duplicate names will be elided.
}
