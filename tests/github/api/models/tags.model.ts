/* tslint:disable */

export interface Tags {
  message: string;  // String of the tag message.
  object: string;  // String of the SHA of the git object this is tagging.
  tag: string;
  tagger: object;
  type: string;  // String of the type of the object weâ€™re tagging. Normally this is a commit but it can also be a tree or a blob.
}
