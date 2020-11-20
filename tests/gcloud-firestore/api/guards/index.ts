/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function is$Xgafv(arg: any): arg is models.$Xgafv {
  return arg != null
   || arg === models.$Xgafv.V1
   || arg === models.$Xgafv.V2
  ;
  }

export function isAlt(arg: any): arg is models.Alt {
  return arg != null
   || arg === models.Alt.json
   || arg === models.Alt.media
   || arg === models.Alt.proto
  ;
  }

export function isArrayValue(arg: any): arg is models.ArrayValue {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // values?: Value[]
    ( typeof arg.values === 'undefined' || (Array.isArray(arg.values) && arg.values.every((item: unknown) => isValue(item))) ) &&

  true
  );
  }

export function isBatchGetDocumentsRequest(arg: any): arg is models.BatchGetDocumentsRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // documents?: string[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every((item: unknown) => typeof item === 'string')) ) &&
    // mask?: DocumentMask
    ( typeof arg.mask === 'undefined' || isDocumentMask(arg.mask) ) &&
    // newTransaction?: TransactionOptions
    ( typeof arg.newTransaction === 'undefined' || isTransactionOptions(arg.newTransaction) ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isBatchGetDocumentsResponse(arg: any): arg is models.BatchGetDocumentsResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // found?: Document
    ( typeof arg.found === 'undefined' || isDocument(arg.found) ) &&
    // missing?: string
    ( typeof arg.missing === 'undefined' || typeof arg.missing === 'string' ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isBeginTransactionRequest(arg: any): arg is models.BeginTransactionRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // options?: TransactionOptions
    ( typeof arg.options === 'undefined' || isTransactionOptions(arg.options) ) &&

  true
  );
  }

export function isBeginTransactionResponse(arg: any): arg is models.BeginTransactionResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isCollectionSelector(arg: any): arg is models.CollectionSelector {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // allDescendants?: boolean
    ( typeof arg.allDescendants === 'undefined' || typeof arg.allDescendants === 'boolean' ) &&
    // collectionId?: string
    ( typeof arg.collectionId === 'undefined' || typeof arg.collectionId === 'string' ) &&

  true
  );
  }

export function isCommitRequest(arg: any): arg is models.CommitRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&
    // writes?: Write[]
    ( typeof arg.writes === 'undefined' || (Array.isArray(arg.writes) && arg.writes.every((item: unknown) => isWrite(item))) ) &&

  true
  );
  }

export function isCommitResponse(arg: any): arg is models.CommitResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // commitTime?: string
    ( typeof arg.commitTime === 'undefined' || typeof arg.commitTime === 'string' ) &&
    // writeResults?: WriteResult[]
    ( typeof arg.writeResults === 'undefined' || (Array.isArray(arg.writeResults) && arg.writeResults.every((item: unknown) => isWriteResult(item))) ) &&

  true
  );
  }

export function isCompositeFilter(arg: any): arg is models.CompositeFilter {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // filters?: Filter[]
    ( typeof arg.filters === 'undefined' || (Array.isArray(arg.filters) && arg.filters.every((item: unknown) => isFilter(item))) ) &&
    // op?: 'OPERATOR_UNSPECIFIED' | 'AND'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'AND'].includes(arg.op) ) &&

  true
  );
  }

export function isCursor(arg: any): arg is models.Cursor {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // before?: boolean
    ( typeof arg.before === 'undefined' || typeof arg.before === 'boolean' ) &&
    // values?: Value[]
    ( typeof arg.values === 'undefined' || (Array.isArray(arg.values) && arg.values.every((item: unknown) => isValue(item))) ) &&

  true
  );
  }

export function isDocument(arg: any): arg is models.Document {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // createTime?: string
    ( typeof arg.createTime === 'undefined' || typeof arg.createTime === 'string' ) &&
    // fields?: { [key: string]: Value }
    ( typeof arg.fields === 'undefined' || Object.values(arg.fields).every((value: unknown) => isValue(value)) ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

  true
  );
  }

export function isDocumentChange(arg: any): arg is models.DocumentChange {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // document?: Document
    ( typeof arg.document === 'undefined' || isDocument(arg.document) ) &&
    // removedTargetIds?: number[]
    ( typeof arg.removedTargetIds === 'undefined' || (Array.isArray(arg.removedTargetIds) && arg.removedTargetIds.every((item: unknown) => typeof item === 'number')) ) &&
    // targetIds?: number[]
    ( typeof arg.targetIds === 'undefined' || (Array.isArray(arg.targetIds) && arg.targetIds.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isDocumentDelete(arg: any): arg is models.DocumentDelete {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // document?: string
    ( typeof arg.document === 'undefined' || typeof arg.document === 'string' ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // removedTargetIds?: number[]
    ( typeof arg.removedTargetIds === 'undefined' || (Array.isArray(arg.removedTargetIds) && arg.removedTargetIds.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isDocumentMask(arg: any): arg is models.DocumentMask {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fieldPaths?: string[]
    ( typeof arg.fieldPaths === 'undefined' || (Array.isArray(arg.fieldPaths) && arg.fieldPaths.every((item: unknown) => typeof item === 'string')) ) &&

  true
  );
  }

export function isDocumentRemove(arg: any): arg is models.DocumentRemove {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // document?: string
    ( typeof arg.document === 'undefined' || typeof arg.document === 'string' ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // removedTargetIds?: number[]
    ( typeof arg.removedTargetIds === 'undefined' || (Array.isArray(arg.removedTargetIds) && arg.removedTargetIds.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isDocumentsTarget(arg: any): arg is models.DocumentsTarget {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // documents?: string[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every((item: unknown) => typeof item === 'string')) ) &&

  true
  );
  }

export function isDocumentTransform(arg: any): arg is models.DocumentTransform {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // document?: string
    ( typeof arg.document === 'undefined' || typeof arg.document === 'string' ) &&
    // fieldTransforms?: FieldTransform[]
    ( typeof arg.fieldTransforms === 'undefined' || (Array.isArray(arg.fieldTransforms) && arg.fieldTransforms.every((item: unknown) => isFieldTransform(item))) ) &&

  true
  );
  }

export function isEmpty(arg: any): arg is models.Empty {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isExistenceFilter(arg: any): arg is models.ExistenceFilter {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // count?: number
    ( typeof arg.count === 'undefined' || typeof arg.count === 'number' ) &&
    // targetId?: number
    ( typeof arg.targetId === 'undefined' || typeof arg.targetId === 'number' ) &&

  true
  );
  }

export function isFieldFilter(arg: any): arg is models.FieldFilter {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&
    // op?: 'OPERATOR_UNSPECIFIED' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'EQUAL'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'EQUAL'].includes(arg.op) ) &&
    // value?: Value
    ( typeof arg.value === 'undefined' || isValue(arg.value) ) &&

  true
  );
  }

export function isFieldReference(arg: any): arg is models.FieldReference {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&

  true
  );
  }

export function isFieldTransform(arg: any): arg is models.FieldTransform {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&
    // setToServerValue?: 'SERVER_VALUE_UNSPECIFIED' | 'REQUEST_TIME'
    ( typeof arg.setToServerValue === 'undefined' || ['SERVER_VALUE_UNSPECIFIED', 'REQUEST_TIME'].includes(arg.setToServerValue) ) &&

  true
  );
  }

export function isFilter(arg: any): arg is models.Filter {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // compositeFilter?: CompositeFilter
    ( typeof arg.compositeFilter === 'undefined' || isCompositeFilter(arg.compositeFilter) ) &&
    // fieldFilter?: FieldFilter
    ( typeof arg.fieldFilter === 'undefined' || isFieldFilter(arg.fieldFilter) ) &&
    // unaryFilter?: UnaryFilter
    ( typeof arg.unaryFilter === 'undefined' || isUnaryFilter(arg.unaryFilter) ) &&

  true
  );
  }

export function isIndex(arg: any): arg is models.Index {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // collectionId?: string
    ( typeof arg.collectionId === 'undefined' || typeof arg.collectionId === 'string' ) &&
    // fields?: IndexField[]
    ( typeof arg.fields === 'undefined' || (Array.isArray(arg.fields) && arg.fields.every((item: unknown) => isIndexField(item))) ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | 'ERROR'
    ( typeof arg.state === 'undefined' || ['STATE_UNSPECIFIED', 'CREATING', 'READY', 'ERROR'].includes(arg.state) ) &&

  true
  );
  }

export function isIndexField(arg: any): arg is models.IndexField {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&
    // mode?: 'MODE_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
    ( typeof arg.mode === 'undefined' || ['MODE_UNSPECIFIED', 'ASCENDING', 'DESCENDING'].includes(arg.mode) ) &&

  true
  );
  }

export function isLatLng(arg: any): arg is models.LatLng {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // latitude?: number
    ( typeof arg.latitude === 'undefined' || typeof arg.latitude === 'number' ) &&
    // longitude?: number
    ( typeof arg.longitude === 'undefined' || typeof arg.longitude === 'number' ) &&

  true
  );
  }

export function isListCollectionIdsRequest(arg: any): arg is models.ListCollectionIdsRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // pageSize?: number
    ( typeof arg.pageSize === 'undefined' || typeof arg.pageSize === 'number' ) &&
    // pageToken?: string
    ( typeof arg.pageToken === 'undefined' || typeof arg.pageToken === 'string' ) &&

  true
  );
  }

export function isListCollectionIdsResponse(arg: any): arg is models.ListCollectionIdsResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // collectionIds?: string[]
    ( typeof arg.collectionIds === 'undefined' || (Array.isArray(arg.collectionIds) && arg.collectionIds.every((item: unknown) => typeof item === 'string')) ) &&
    // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

  true
  );
  }

export function isListDocumentsResponse(arg: any): arg is models.ListDocumentsResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // documents?: Document[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every((item: unknown) => isDocument(item))) ) &&
    // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

  true
  );
  }

export function isListenRequest(arg: any): arg is models.ListenRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // addTarget?: Target
    ( typeof arg.addTarget === 'undefined' || isTarget(arg.addTarget) ) &&
    // labels?: { [key: string]: string }
    ( typeof arg.labels === 'undefined' || Object.values(arg.labels).every((value: unknown) => typeof value === 'string') ) &&
    // removeTarget?: number
    ( typeof arg.removeTarget === 'undefined' || typeof arg.removeTarget === 'number' ) &&

  true
  );
  }

export function isListenResponse(arg: any): arg is models.ListenResponse {
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

export function isListIndexesResponse(arg: any): arg is models.ListIndexesResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // indexes?: Index[]
    ( typeof arg.indexes === 'undefined' || (Array.isArray(arg.indexes) && arg.indexes.every((item: unknown) => isIndex(item))) ) &&
    // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

  true
  );
  }

export function isMapValue(arg: any): arg is models.MapValue {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fields?: { [key: string]: Value }
    ( typeof arg.fields === 'undefined' || Object.values(arg.fields).every((value: unknown) => isValue(value)) ) &&

  true
  );
  }

export function isOperation(arg: any): arg is models.Operation {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // done?: boolean
    ( typeof arg.done === 'undefined' || typeof arg.done === 'boolean' ) &&
    // error?: Status
    ( typeof arg.error === 'undefined' || isStatus(arg.error) ) &&
    // metadata?: { [key: string]: any }
    ( typeof arg.metadata === 'undefined' || Object.values(arg.metadata).every((value: unknown) => isany(value)) ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // response?: { [key: string]: any }
    ( typeof arg.response === 'undefined' || Object.values(arg.response).every((value: unknown) => isany(value)) ) &&

  true
  );
  }

export function isOrder(arg: any): arg is models.Order {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // direction?: 'DIRECTION_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
    ( typeof arg.direction === 'undefined' || ['DIRECTION_UNSPECIFIED', 'ASCENDING', 'DESCENDING'].includes(arg.direction) ) &&
    // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&

  true
  );
  }

export function isPrecondition(arg: any): arg is models.Precondition {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // exists?: boolean
    ( typeof arg.exists === 'undefined' || typeof arg.exists === 'boolean' ) &&
    // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

  true
  );
  }

export function isProjection(arg: any): arg is models.Projection {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fields?: FieldReference[]
    ( typeof arg.fields === 'undefined' || (Array.isArray(arg.fields) && arg.fields.every((item: unknown) => isFieldReference(item))) ) &&

  true
  );
  }

export function isQueryTarget(arg: any): arg is models.QueryTarget {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // parent?: string
    ( typeof arg.parent === 'undefined' || typeof arg.parent === 'string' ) &&
    // structuredQuery?: StructuredQuery
    ( typeof arg.structuredQuery === 'undefined' || isStructuredQuery(arg.structuredQuery) ) &&

  true
  );
  }

export function isReadOnly(arg: any): arg is models.ReadOnly {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&

  true
  );
  }

export function isReadWrite(arg: any): arg is models.ReadWrite {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // retryTransaction?: string
    ( typeof arg.retryTransaction === 'undefined' || typeof arg.retryTransaction === 'string' ) &&

  true
  );
  }

export function isRollbackRequest(arg: any): arg is models.RollbackRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isRunQueryRequest(arg: any): arg is models.RunQueryRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // newTransaction?: TransactionOptions
    ( typeof arg.newTransaction === 'undefined' || isTransactionOptions(arg.newTransaction) ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // structuredQuery?: StructuredQuery
    ( typeof arg.structuredQuery === 'undefined' || isStructuredQuery(arg.structuredQuery) ) &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isRunQueryResponse(arg: any): arg is models.RunQueryResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // document?: Document
    ( typeof arg.document === 'undefined' || isDocument(arg.document) ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // skippedResults?: number
    ( typeof arg.skippedResults === 'undefined' || typeof arg.skippedResults === 'number' ) &&
    // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

  true
  );
  }

export function isStatus(arg: any): arg is models.Status {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // code?: number
    ( typeof arg.code === 'undefined' || typeof arg.code === 'number' ) &&
    // details?: object[]
    ( typeof arg.details === 'undefined' || (Array.isArray(arg.details) && arg.details.every((item: unknown) => typeof item === 'object')) ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&

  true
  );
  }

export function isStructuredQuery(arg: any): arg is models.StructuredQuery {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // endAt?: Cursor
    ( typeof arg.endAt === 'undefined' || isCursor(arg.endAt) ) &&
    // from?: CollectionSelector[]
    ( typeof arg.from === 'undefined' || (Array.isArray(arg.from) && arg.from.every((item: unknown) => isCollectionSelector(item))) ) &&
    // limit?: number
    ( typeof arg.limit === 'undefined' || typeof arg.limit === 'number' ) &&
    // offset?: number
    ( typeof arg.offset === 'undefined' || typeof arg.offset === 'number' ) &&
    // orderBy?: Order[]
    ( typeof arg.orderBy === 'undefined' || (Array.isArray(arg.orderBy) && arg.orderBy.every((item: unknown) => isOrder(item))) ) &&
    // select?: Projection
    ( typeof arg.select === 'undefined' || isProjection(arg.select) ) &&
    // startAt?: Cursor
    ( typeof arg.startAt === 'undefined' || isCursor(arg.startAt) ) &&
    // where?: Filter
    ( typeof arg.where === 'undefined' || isFilter(arg.where) ) &&

  true
  );
  }

export function isTarget(arg: any): arg is models.Target {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // documents?: DocumentsTarget
    ( typeof arg.documents === 'undefined' || isDocumentsTarget(arg.documents) ) &&
    // once?: boolean
    ( typeof arg.once === 'undefined' || typeof arg.once === 'boolean' ) &&
    // query?: QueryTarget
    ( typeof arg.query === 'undefined' || isQueryTarget(arg.query) ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // resumeToken?: string
    ( typeof arg.resumeToken === 'undefined' || typeof arg.resumeToken === 'string' ) &&
    // targetId?: number
    ( typeof arg.targetId === 'undefined' || typeof arg.targetId === 'number' ) &&

  true
  );
  }

export function isTargetChange(arg: any): arg is models.TargetChange {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // cause?: Status
    ( typeof arg.cause === 'undefined' || isStatus(arg.cause) ) &&
    // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
    // resumeToken?: string
    ( typeof arg.resumeToken === 'undefined' || typeof arg.resumeToken === 'string' ) &&
    // targetChangeType?: 'NO_CHANGE' | 'ADD' | 'REMOVE' | 'CURRENT' | 'RESET'
    ( typeof arg.targetChangeType === 'undefined' || ['NO_CHANGE', 'ADD', 'REMOVE', 'CURRENT', 'RESET'].includes(arg.targetChangeType) ) &&
    // targetIds?: number[]
    ( typeof arg.targetIds === 'undefined' || (Array.isArray(arg.targetIds) && arg.targetIds.every((item: unknown) => typeof item === 'number')) ) &&

  true
  );
  }

export function isTransactionOptions(arg: any): arg is models.TransactionOptions {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // readOnly?: ReadOnly
    ( typeof arg.readOnly === 'undefined' || isReadOnly(arg.readOnly) ) &&
    // readWrite?: ReadWrite
    ( typeof arg.readWrite === 'undefined' || isReadWrite(arg.readWrite) ) &&

  true
  );
  }

export function isUnaryFilter(arg: any): arg is models.UnaryFilter {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&
    // op?: 'OPERATOR_UNSPECIFIED' | 'IS_NAN' | 'IS_NULL'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'IS_NAN', 'IS_NULL'].includes(arg.op) ) &&

  true
  );
  }

export function isValue(arg: any): arg is models.Value {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // arrayValue?: ArrayValue
    ( typeof arg.arrayValue === 'undefined' || isArrayValue(arg.arrayValue) ) &&
    // booleanValue?: boolean
    ( typeof arg.booleanValue === 'undefined' || typeof arg.booleanValue === 'boolean' ) &&
    // bytesValue?: string
    ( typeof arg.bytesValue === 'undefined' || typeof arg.bytesValue === 'string' ) &&
    // doubleValue?: number
    ( typeof arg.doubleValue === 'undefined' || typeof arg.doubleValue === 'number' ) &&
    // geoPointValue?: LatLng
    ( typeof arg.geoPointValue === 'undefined' || isLatLng(arg.geoPointValue) ) &&
    // integerValue?: string
    ( typeof arg.integerValue === 'undefined' || typeof arg.integerValue === 'string' ) &&
    // mapValue?: MapValue
    ( typeof arg.mapValue === 'undefined' || isMapValue(arg.mapValue) ) &&
    // nullValue?: 'NULL_VALUE'
    ( typeof arg.nullValue === 'undefined' || ['NULL_VALUE'].includes(arg.nullValue) ) &&
    // referenceValue?: string
    ( typeof arg.referenceValue === 'undefined' || typeof arg.referenceValue === 'string' ) &&
    // stringValue?: string
    ( typeof arg.stringValue === 'undefined' || typeof arg.stringValue === 'string' ) &&
    // timestampValue?: string
    ( typeof arg.timestampValue === 'undefined' || typeof arg.timestampValue === 'string' ) &&

  true
  );
  }

export function isWrite(arg: any): arg is models.Write {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // currentDocument?: Precondition
    ( typeof arg.currentDocument === 'undefined' || isPrecondition(arg.currentDocument) ) &&
    // delete?: string
    ( typeof arg.delete === 'undefined' || typeof arg.delete === 'string' ) &&
    // transform?: DocumentTransform
    ( typeof arg.transform === 'undefined' || isDocumentTransform(arg.transform) ) &&
    // update?: Document
    ( typeof arg.update === 'undefined' || isDocument(arg.update) ) &&
    // updateMask?: DocumentMask
    ( typeof arg.updateMask === 'undefined' || isDocumentMask(arg.updateMask) ) &&

  true
  );
  }

export function isWriteRequest(arg: any): arg is models.WriteRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // labels?: { [key: string]: string }
    ( typeof arg.labels === 'undefined' || Object.values(arg.labels).every((value: unknown) => typeof value === 'string') ) &&
    // streamId?: string
    ( typeof arg.streamId === 'undefined' || typeof arg.streamId === 'string' ) &&
    // streamToken?: string
    ( typeof arg.streamToken === 'undefined' || typeof arg.streamToken === 'string' ) &&
    // writes?: Write[]
    ( typeof arg.writes === 'undefined' || (Array.isArray(arg.writes) && arg.writes.every((item: unknown) => isWrite(item))) ) &&

  true
  );
  }

export function isWriteResponse(arg: any): arg is models.WriteResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // commitTime?: string
    ( typeof arg.commitTime === 'undefined' || typeof arg.commitTime === 'string' ) &&
    // streamId?: string
    ( typeof arg.streamId === 'undefined' || typeof arg.streamId === 'string' ) &&
    // streamToken?: string
    ( typeof arg.streamToken === 'undefined' || typeof arg.streamToken === 'string' ) &&
    // writeResults?: WriteResult[]
    ( typeof arg.writeResults === 'undefined' || (Array.isArray(arg.writeResults) && arg.writeResults.every((item: unknown) => isWriteResult(item))) ) &&

  true
  );
  }

export function isWriteResult(arg: any): arg is models.WriteResult {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // transformResults?: Value[]
    ( typeof arg.transformResults === 'undefined' || (Array.isArray(arg.transformResults) && arg.transformResults.every((item: unknown) => isValue(item))) ) &&
    // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

  true
  );
  }


