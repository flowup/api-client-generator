/* tslint:disable */
import {
  CodeFrequencyStats,
} from '../models';

export function isCodeFrequencyStats(arg: any): arg is CodeFrequencyStats {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

