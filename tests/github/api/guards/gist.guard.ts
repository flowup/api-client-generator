/* tslint:disable */
import {
  Gist,
} from '../models';

export function isGist(arg: any): arg is Gist {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // comments?: number
    ( typeof arg.comments === 'undefined' || typeof arg.comments === 'number' ) &&
  // comments_url?: string
    ( typeof arg.comments_url === 'undefined' || typeof arg.comments_url === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // files?: { [key: string]: any }
    ( typeof arg.files === 'undefined' || typeof arg.files === 'object' ) &&
  // forks?: { [key: string]: any }[]
    ( typeof arg.forks === 'undefined' || (Array.isArray(arg.forks) && arg.forks.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // git_pull_url?: string
    ( typeof arg.git_pull_url === 'undefined' || typeof arg.git_pull_url === 'string' ) &&
  // git_push_url?: string
    ( typeof arg.git_push_url === 'undefined' || typeof arg.git_push_url === 'string' ) &&
  // history?: { [key: string]: any }[]
    ( typeof arg.history === 'undefined' || (Array.isArray(arg.history) && arg.history.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: string
    ( typeof arg.id === 'undefined' || typeof arg.id === 'string' ) &&
  // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

    true
  );
}

