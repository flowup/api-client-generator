/* tslint:disable */
import {
  ListenResponse,
} from '../models';
import {
  isDocumentChange,
  isDocumentDelete,
  isDocumentRemove,
  isExistenceFilter,
  isTargetChange,
} from '.';

export function isListenResponse(arg: any): arg is ListenResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // documentChange?: DocumentChange
    ( typeof arg.documentChange === 'undefined' || isDocumentChange(arg.documentChange) ) &&
  // documentDelete?: DocumentDelete
    ( typeof arg.documentDelete === 'undefined' || isDocumentDelete(arg.documentDelete) ) &&
  // documentRemove?: DocumentRemove
    ( typeof arg.documentRemove === 'undefined' || isDocumentRemove(arg.documentRemove) ) &&
  // filter?: ExistenceFilter
    ( typeof arg.filter === 'undefined' || isExistenceFilter(arg.filter) ) &&
  // targetChange?: TargetChange
    ( typeof arg.targetChange === 'undefined' || isTargetChange(arg.targetChange) ) &&

    true
  );
}

