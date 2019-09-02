/* tslint:disable */
import {
  Projection,
} from '../models';
import {
  isFieldReference,
} from '.';

export function isProjection(arg: any): arg is Projection {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fields?: FieldReference[]
    ( typeof arg.fields === 'undefined' || (Array.isArray(arg.fields) && arg.fields.every(item => isFieldReference(item))) ) &&

    true
  );
}

