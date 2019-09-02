/* tslint:disable */
import {
  Downloads,
} from '../models';

export function isDownloads(arg: any): arg is Downloads {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // content_type?: string
    ( typeof arg.content_type === 'undefined' || typeof arg.content_type === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // download_count?: number
    ( typeof arg.download_count === 'undefined' || typeof arg.download_count === 'number' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

