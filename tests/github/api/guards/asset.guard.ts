/* tslint:disable */
import {
  Asset,
} from '../models';

export function isAsset(arg: any): arg is Asset {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // content_type?: string
    ( typeof arg.content_type === 'undefined' || typeof arg.content_type === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // download_count?: number
    ( typeof arg.download_count === 'undefined' || typeof arg.download_count === 'number' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // label?: string
    ( typeof arg.label === 'undefined' || typeof arg.label === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // uploader?: { [key: string]: any }
    ( typeof arg.uploader === 'undefined' || typeof arg.uploader === 'object' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

