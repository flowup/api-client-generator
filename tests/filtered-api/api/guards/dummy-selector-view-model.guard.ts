/* tslint:disable */
import {
  DummySelectorViewModel,
} from '../models';
import { isDummyViewModel } from './dummy-view-model.guard';

export function isDummySelectorViewModel(arg: any): arg is DummySelectorViewModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // DummyList?: DummyViewModel[]
    ( typeof arg.DummyList === 'undefined' || (Array.isArray(arg.DummyList) && arg.DummyList.every(item => isDummyViewModel(item))) ) &&
  // SelectedDummyObjId?: number
    ( typeof arg.SelectedDummyObjId === 'undefined' || typeof arg.SelectedDummyObjId === 'number' ) &&

    true
  );
}

