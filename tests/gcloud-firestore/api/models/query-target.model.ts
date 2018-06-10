/* tslint:disable */
import {
  StructuredQuery,
} from './..';

/**
 * A target specified by a query.
 */
export interface QueryTarget {
  parent: string;  // The parent resource name. In the format:`projects/{project_id}/databases/{database_id}/documents` or`projects/{project_id}/databases/{database_id}/documents/{document_path}`.For example:`projects/my-project/databases/my-database/documents` or`projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
  structuredQuery: StructuredQuery;  // A structured query.
}
