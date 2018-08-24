/* tslint:disable */
import {
  DocumentsTarget,
  QueryTarget,
} from '.';

/**
 * A specification of a set of documents to listen to.
 */
export interface Target {
  documents: DocumentsTarget;  // A target specified by a set of document names.
  once: boolean;  // If the target should be removed once it is current and consistent.
  query: QueryTarget;  // A target specified by a query.
  readTime: string;  // Start listening after a specific `read_time`.The client must know the state of matching documents at this time.
  resumeToken: string;  // A resume token from a prior TargetChange for an identical target.Using a resume token with a different target is unsupported and may fail.
  targetId: number;  // A client provided target ID.If not set, the server will assign an ID for the target.Used for resuming a target without changing IDs. The IDs can either beclient-assigned or be server-assigned in a previous stream. All targetswith client provided IDs must be added before adding a target that needsa server-assigned id.
}
