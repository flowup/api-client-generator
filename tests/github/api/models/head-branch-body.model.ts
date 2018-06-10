/* tslint:disable */

export interface HeadBranchBody {
  force: boolean;  // Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure youâ€™re not overwriting work.
  sha: string;  // String of the SHA1 value to set this reference to.
}
