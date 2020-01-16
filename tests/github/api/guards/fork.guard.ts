/* tslint:disable */
import {
  Fork,
} from '../models';

export function isFork(arg: any): arg is Fork {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // clone_url?: string
    ( typeof arg.clone_url === 'undefined' || typeof arg.clone_url === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // fork?: boolean
    ( typeof arg.fork === 'undefined' || typeof arg.fork === 'boolean' ) &&
  // forks?: number
    ( typeof arg.forks === 'undefined' || typeof arg.forks === 'number' ) &&
  // forks_count?: number
    ( typeof arg.forks_count === 'undefined' || typeof arg.forks_count === 'number' ) &&
  // full_name?: string
    ( typeof arg.full_name === 'undefined' || typeof arg.full_name === 'string' ) &&
  // git_url?: string
    ( typeof arg.git_url === 'undefined' || typeof arg.git_url === 'string' ) &&
  // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // language?: string
    ( typeof arg.language === 'undefined' || typeof arg.language === 'string' ) &&
  // master_branch?: string
    ( typeof arg.master_branch === 'undefined' || typeof arg.master_branch === 'string' ) &&
  // mirror_url?: string
    ( typeof arg.mirror_url === 'undefined' || typeof arg.mirror_url === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // open_issues?: number
    ( typeof arg.open_issues === 'undefined' || typeof arg.open_issues === 'number' ) &&
  // open_issues_count?: number
    ( typeof arg.open_issues_count === 'undefined' || typeof arg.open_issues_count === 'number' ) &&
  // owner?: { [key: string]: any }
    ( typeof arg.owner === 'undefined' || typeof arg.owner === 'object' ) &&
  // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&
  // pushed_at?: string
    ( typeof arg.pushed_at === 'undefined' || typeof arg.pushed_at === 'string' ) &&
  // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
  // ssh_url?: string
    ( typeof arg.ssh_url === 'undefined' || typeof arg.ssh_url === 'string' ) &&
  // svn_url?: string
    ( typeof arg.svn_url === 'undefined' || typeof arg.svn_url === 'string' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // watchers?: number
    ( typeof arg.watchers === 'undefined' || typeof arg.watchers === 'number' ) &&
  // watchers_count?: number
    ( typeof arg.watchers_count === 'undefined' || typeof arg.watchers_count === 'number' ) &&

    true
  );
}

