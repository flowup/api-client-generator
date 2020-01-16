/* tslint:disable */
import {
  ListDocumentsResponse,
} from '../models';
import { isDocument } from './document.guard';

export function isListDocumentsResponse(arg: any): arg is ListDocumentsResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // documents?: Document[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every(item => isDocument(item))) ) &&
  // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

    true
  );
}

