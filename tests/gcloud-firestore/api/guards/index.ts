/* tslint:disable */

export { is$Xgafv } from './$-xgafv.enum.guard';
export { isAlt } from './alt.enum.guard';
export { isArrayValue } from './array-value.model.guard';
export { isBatchGetDocumentsRequest } from './batch-get-documents-request.model.guard';
export { isBatchGetDocumentsResponse } from './batch-get-documents-response.model.guard';
export { isBeginTransactionRequest } from './begin-transaction-request.model.guard';
export { isBeginTransactionResponse } from './begin-transaction-response.model.guard';
export { isCollectionSelector } from './collection-selector.model.guard';
export { isCommitRequest } from './commit-request.model.guard';
export { isCommitResponse } from './commit-response.model.guard';
export { isCompositeFilter } from './composite-filter.model.guard';
export { isCursor } from './cursor.model.guard';
export { isDocument } from './document.model.guard';
export { isDocumentChange } from './document-change.model.guard';
export { isDocumentDelete } from './document-delete.model.guard';
export { isDocumentMask } from './document-mask.model.guard';
export { isDocumentRemove } from './document-remove.model.guard';
export { isDocumentsTarget } from './documents-target.model.guard';
export { isDocumentTransform } from './document-transform.model.guard';
export { isEmpty } from './empty.model.guard';
export { isExistenceFilter } from './existence-filter.model.guard';
export { isFieldFilter } from './field-filter.model.guard';
export { isFieldReference } from './field-reference.model.guard';
export { isFieldTransform } from './field-transform.model.guard';
export { isFilter } from './filter.model.guard';
export { isIndex } from './index.model.guard';
export { isIndexField } from './index-field.model.guard';
export { isLatLng } from './lat-lng.model.guard';
export { isListCollectionIdsRequest } from './list-collection-ids-request.model.guard';
export { isListCollectionIdsResponse } from './list-collection-ids-response.model.guard';
export { isListDocumentsResponse } from './list-documents-response.model.guard';
export { isListenRequest } from './listen-request.model.guard';
export { isListenResponse } from './listen-response.model.guard';
export { isListIndexesResponse } from './list-indexes-response.model.guard';
export { isMapValue } from './map-value.model.guard';
export { isOperation } from './operation.model.guard';
export { isOrder } from './order.model.guard';
export { isPrecondition } from './precondition.model.guard';
export { isProjection } from './projection.model.guard';
export { isQueryTarget } from './query-target.model.guard';
export { isReadOnly } from './read-only.model.guard';
export { isReadWrite } from './read-write.model.guard';
export { isRollbackRequest } from './rollback-request.model.guard';
export { isRunQueryRequest } from './run-query-request.model.guard';
export { isRunQueryResponse } from './run-query-response.model.guard';
export { isStatus } from './status.model.guard';
export { isStructuredQuery } from './structured-query.model.guard';
export { isTarget } from './target.model.guard';
export { isTargetChange } from './target-change.model.guard';
export { isTransactionOptions } from './transaction-options.model.guard';
export { isUnaryFilter } from './unary-filter.model.guard';
export { isValue } from './value.model.guard';
export { isWrite } from './write.model.guard';
export { isWriteRequest } from './write-request.model.guard';
export { isWriteResponse } from './write-response.model.guard';
export { isWriteResult } from './write-result.model.guard';


/* pre-prepared guards for build in complex types */

export function isany(_: any): _ is any {
  return true;
}

export function isstring(arg: any): arg is string {
  return typeof arg === 'string';
}

export function isnumber(arg: any): arg is number {
  return typeof arg === 'number';
}

export function isboolean(arg: any): arg is boolean {
  return typeof arg === 'boolean';
}

export function isObject(arg: any): arg is any {
  return typeof arg === 'object';
}

export function isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
  return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && isBlob(arg);
}

export function isDate(arg: any): arg is Date {
  return arg != null && typeof arg.toISOString === 'function';
}
