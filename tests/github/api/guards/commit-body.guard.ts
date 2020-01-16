/* tslint:disable */
import {
  CommitBody,
} from '../models';

export function isCommitBody(arg: any): arg is CommitBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body: string
    ( typeof arg.body === 'string' ) &&
  // line?: string
    ( typeof arg.line === 'undefined' || typeof arg.line === 'string' ) &&
  // number?: string
    ( typeof arg.number === 'undefined' || typeof arg.number === 'string' ) &&
  // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
  // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&
  // sha: string
    ( typeof arg.sha === 'string' ) &&

    true
  );
}

