/* tslint:disable */
import {
  ApiResponse,
} from '../models';

export function isApiResponse(arg: any): arg is ApiResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // code?: number
    ( typeof arg.code === 'undefined' || typeof arg.code === 'number' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&

    true
  );
}

