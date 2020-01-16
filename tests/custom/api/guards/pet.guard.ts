/* tslint:disable */
import {
  Pet,
} from '../models';

export function isPet(arg: any): arg is Pet {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // pet_type: string
    ( typeof arg.pet_type === 'string' ) &&

    true
  );
}

