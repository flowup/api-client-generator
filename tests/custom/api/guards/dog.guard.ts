/* tslint:disable */
import {
  Dog,
} from '../models';
import { isPet } from './pet.guard';

export function isDog(arg: any): arg is Dog {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // bark?: boolean
    ( typeof arg.bark === 'undefined' || typeof arg.bark === 'boolean' ) &&
  // breed?: 'Dingo' | 'Husky' | 'Retriever' | 'Shepherd'
    ( typeof arg.breed === 'undefined' || ['Dingo', 'Husky', 'Retriever', 'Shepherd'].includes(arg.breed) ) &&
  // extends Pet
    isPet(arg) &&

    true
  );
}

