/* tslint:disable */
import {
  Markdown,
} from '../models';

export function isMarkdown(arg: any): arg is Markdown {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // context?: string
    ( typeof arg.context === 'undefined' || typeof arg.context === 'string' ) &&
  // mode?: string
    ( typeof arg.mode === 'undefined' || typeof arg.mode === 'string' ) &&
  // text?: string
    ( typeof arg.text === 'undefined' || typeof arg.text === 'string' ) &&

    true
  );
}

