/* tslint:disable */
import {
  ContentsPath,
} from '../models';

export function isContentsPath(arg: any): arg is ContentsPath {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === '{ [key: string]: any }' ) &&
  // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
  // encoding?: string
    ( typeof arg.encoding === 'undefined' || typeof arg.encoding === 'string' ) &&
  // git_url?: string
    ( typeof arg.git_url === 'undefined' || typeof arg.git_url === 'string' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

