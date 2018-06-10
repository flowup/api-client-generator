/* tslint:disable */
import {
  DocumentChange,
  DocumentDelete,
  DocumentRemove,
  ExistenceFilter,
  TargetChange,
} from './..';

/**
 * The response for Firestore.Listen.
 */
export interface ListenResponse {
  documentChange: DocumentChange;  // A Document has changed.
  documentDelete: DocumentDelete;  // A Document has been deleted.
  documentRemove: DocumentRemove;  // A Document has been removed from a target (because it is no longerrelevant to that target).
  filter: ExistenceFilter;  // A filter to apply to the set of documents previously returned for thegiven target.Returned when documents may have been removed from the given target, butthe exact documents are unknown.
  targetChange: TargetChange;  // Targets have changed.
}
