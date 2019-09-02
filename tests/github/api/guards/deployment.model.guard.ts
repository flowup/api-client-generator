/* tslint:disable */
import {
  Deployment,
} from '../models';

export function isDeployment(arg: any): arg is Deployment {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // payload?: { [key: string]: any }
    ( typeof arg.payload === 'undefined' || typeof arg.payload === '{ [key: string]: any }' ) &&
  // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&

    true
  );
}

