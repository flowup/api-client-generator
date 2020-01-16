/* tslint:disable */
import {
  TestModel,
} from '../models';

export function isTestModel(arg: any): arg is TestModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // '42test'?: string
    ( typeof arg.'42test' === 'undefined' || typeof arg.'42test' === 'string' ) &&
  // 'anotherKey@'?: string
    ( typeof arg.'anotherKey@' === 'undefined' || typeof arg.'anotherKey@' === 'string' ) &&
  // 'some-key'?: string
    ( typeof arg.'some-key' === 'undefined' || typeof arg.'some-key' === 'string' ) &&
  // 'yet@notherKey'?: string
    ( typeof arg.'yet@notherKey' === 'undefined' || typeof arg.'yet@notherKey' === 'string' ) &&
  // count?: number
    ( typeof arg.count === 'undefined' || typeof arg.count === 'number' ) &&

    true
  );
}

