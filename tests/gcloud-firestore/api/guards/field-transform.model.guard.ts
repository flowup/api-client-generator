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
  // setToServerValue?: 'SERVER_VALUE_UNSPECIFIED' | 'REQUEST_TIME'
    ( typeof arg.setToServerValue === 'undefined' || ['SERVER_VALUE_UNSPECIFIED', 'REQUEST_TIME'].includes(arg.setToServerValue) ) &&

    true
  );
}

