/* tslint:disable */
import {
  Document,
  DocumentMask,
  DocumentTransform,
  Precondition,
} from './..';

/**
 * A write on a document.
 */
export interface Write {
  currentDocument: Precondition;  // An optional precondition on the document.The write will fail if this is set and not met by the target document.
  delete: string;  // A document name to delete. In the format:`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
  transform: DocumentTransform;  // Applies a tranformation to a document.At most one `transform` per document is allowed in a given request.An `update` cannot follow a `transform` on the same document in a givenrequest.
  update: Document;  // A document to write.
  updateMask: DocumentMask;  // The fields to update in this write.This field can be set only when the operation is `update`.If the mask is not set for an `update` and the document exists, anyexisting data will be overwritten.If the mask is set and the document on the server has fields not covered bythe mask, they are left unchanged.Fields referenced in the mask, but not present in the input document, aredeleted from the document on the server.The field paths in this mask must not contain a reserved field name.
}
