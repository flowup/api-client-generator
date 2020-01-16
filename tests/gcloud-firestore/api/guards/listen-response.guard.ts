/* tslint:disable */
import {
  ListenResponse,
} from '../models';
import { isDocumentChange } from './document-change.guard';
import { isDocumentDelete } from './document-delete.guard';
import { isDocumentRemove } from './document-remove.guard';
import { isExistenceFilter } from './existence-filter.guard';
import { isTargetChange } from './target-change.guard';

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

