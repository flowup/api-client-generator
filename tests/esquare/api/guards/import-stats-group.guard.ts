/* tslint:disable */
import {
  ImportStatsGroup,
} from '../models';
import { isImportStats } from './import-stats.guard';

export function isImportStatsGroup(arg: any): arg is ImportStatsGroup {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // imported?: ImportStats[]
    ( typeof arg.imported === 'undefined' || (Array.isArray(arg.imported) && arg.imported.every(item => isImportStats(item))) ) &&
  // pending?: ImportStats[]
    ( typeof arg.pending === 'undefined' || (Array.isArray(arg.pending) && arg.pending.every(item => isImportStats(item))) ) &&

    true
  );
}

