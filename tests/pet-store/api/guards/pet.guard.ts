/* tslint:disable */
import {
  Pet,
} from '../models';
import { isCategory } from './category.guard';
import { isTag } from './tag.guard';

export function isPet(arg: any): arg is Pet {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // category?: Category
    ( typeof arg.category === 'undefined' || isCategory(arg.category) ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name: string
    ( typeof arg.name === 'string' ) &&
  // photoUrls: string[]
    ( (Array.isArray(arg.photoUrls) && arg.photoUrls.every(item => typeof item === 'string')) ) &&
  // status?: 'available' | 'pending' | 'sold'
    ( typeof arg.status === 'undefined' || ['available', 'pending', 'sold'].includes(arg.status) ) &&
  // tags?: Tag[]
    ( typeof arg.tags === 'undefined' || (Array.isArray(arg.tags) && arg.tags.every(item => isTag(item))) ) &&

    true
  );
}

