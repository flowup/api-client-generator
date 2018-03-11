/* tslint:disable */
import {
  DocumentChange,
  DocumentDelete,
  DocumentRemove,
  ExistenceFilter,
  TargetChange,
} from './..';

export interface ListenResponse {
  documentChange: DocumentChange;
  documentDelete: DocumentDelete;
  documentRemove: DocumentRemove;
  filter: ExistenceFilter;
  targetChange: TargetChange;
}
