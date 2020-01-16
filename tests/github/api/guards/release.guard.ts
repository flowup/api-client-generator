/* tslint:disable */
import {
  Release,
} from '../models';

export function isRelease(arg: any): arg is Release {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // assets?: { [key: string]: any }[]
    ( typeof arg.assets === 'undefined' || (Array.isArray(arg.assets) && arg.assets.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // assets_url?: string
    ( typeof arg.assets_url === 'undefined' || typeof arg.assets_url === 'string' ) &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // draft?: boolean
    ( typeof arg.draft === 'undefined' || typeof arg.draft === 'boolean' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // prerelease?: boolean
    ( typeof arg.prerelease === 'undefined' || typeof arg.prerelease === 'boolean' ) &&
  // published_at?: string
    ( typeof arg.published_at === 'undefined' || typeof arg.published_at === 'string' ) &&
  // tag_name?: string
    ( typeof arg.tag_name === 'undefined' || typeof arg.tag_name === 'string' ) &&
  // tarball_url?: string
    ( typeof arg.tarball_url === 'undefined' || typeof arg.tarball_url === 'string' ) &&
  // target_commitish?: string
    ( typeof arg.target_commitish === 'undefined' || typeof arg.target_commitish === 'string' ) &&
  // upload_url?: string
    ( typeof arg.upload_url === 'undefined' || typeof arg.upload_url === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // zipball_url?: string
    ( typeof arg.zipball_url === 'undefined' || typeof arg.zipball_url === 'string' ) &&

    true
  );
}

