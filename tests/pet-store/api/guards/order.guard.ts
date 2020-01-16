/* tslint:disable */
import {
  Order,
} from '../models';

export function isOrder(arg: any): arg is Order {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // complete?: boolean
    ( typeof arg.complete === 'undefined' || typeof arg.complete === 'boolean' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // petId?: number
    ( typeof arg.petId === 'undefined' || typeof arg.petId === 'number' ) &&
  // quantity?: number
    ( typeof arg.quantity === 'undefined' || typeof arg.quantity === 'number' ) &&
  // shipDate?: string
    ( typeof arg.shipDate === 'undefined' || typeof arg.shipDate === 'string' ) &&
  // status?: 'placed' | 'approved' | 'delivered'
    ( typeof arg.status === 'undefined' || ['placed', 'approved', 'delivered'].includes(arg.status) ) &&

    true
  );
}

