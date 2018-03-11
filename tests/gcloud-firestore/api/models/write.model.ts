/* tslint:disable */
import {
  Document,
  DocumentMask,
  DocumentTransform,
  Precondition,
} from './..';

export interface Write {
  currentDocument: Precondition;
  delete: string;
  transform: DocumentTransform;
  update: Document;
  updateMask: DocumentMask;
}
