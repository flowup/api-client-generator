/* tslint:disable */
import {
  DocumentTransform,
} from '../models';
import {
  isFieldTransform,
} from '.';

export function isDocumentTransform(arg: any): arg is DocumentTransform {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // document?: string
    ( typeof arg.document === 'undefined' || typeof arg.document === 'string' ) &&
  // fieldTransforms?: FieldTransform[]
    ( typeof arg.fieldTransforms === 'undefined' || (Array.isArray(arg.fieldTransforms) && arg.fieldTransforms.every(item => isFieldTransform(item))) ) &&

    true
  );
}

