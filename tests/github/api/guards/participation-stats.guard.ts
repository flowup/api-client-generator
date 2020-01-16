/* tslint:disable */
import {
  ParticipationStats,
} from '../models';

export function isParticipationStats(arg: any): arg is ParticipationStats {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // all?: number[]
    ( typeof arg.all === 'undefined' || (Array.isArray(arg.all) && arg.all.every(item => typeof item === 'number')) ) &&
  // owner?: number[]
    ( typeof arg.owner === 'undefined' || (Array.isArray(arg.owner) && arg.owner.every(item => typeof item === 'number')) ) &&

    true
  );
}

