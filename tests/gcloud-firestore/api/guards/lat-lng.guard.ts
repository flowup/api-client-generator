/* tslint:disable */
import {
  LatLng,
} from '../models';

export function isLatLng(arg: any): arg is LatLng {
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

