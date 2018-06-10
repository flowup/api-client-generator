/* tslint:disable */

export interface CommitBody {
  body: string;
  line: string;  // Deprecated - Use position parameter instead.
  number: string;  // Line number in the file to comment on. Defaults to null.
  path: string;  // Relative path of the file to comment on.
  position: number;  // Line index in the diff to comment on.
  sha: string;  // SHA of the commit to comment on.
}
