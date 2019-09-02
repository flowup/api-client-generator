/* tslint:disable */
import {
  FieldTransform,
} from '../models';

export function isFieldTransform(arg: any): arg is FieldTransform {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&
  // setToServerValue?: string
    ( typeof arg.setToServerValue === 'undefined' || typeof arg.setToServerValue === 'string' ) &&

    true
  );
}

