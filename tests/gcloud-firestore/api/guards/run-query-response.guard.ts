/* tslint:disable */
import {
  RunQueryResponse,
} from '../models';
import { isDocument } from './document.guard';

export function isRunQueryResponse(arg: any): arg is RunQueryResponse {
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

