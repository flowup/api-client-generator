/* tslint:disable */

export interface Trees {
  base_tree?: string;
  sha?: string;  // SHA1 checksum ID of the object in the tree.
  tree?: object[];
  url?: string;
}
