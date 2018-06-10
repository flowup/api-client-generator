/* tslint:disable */

export interface PostRepo {
  auto_init: boolean;  // True to create an initial commit with empty README. Default is false.
  description: string;
  gitignore_template: string;  // Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided. 
  has_downloads: boolean;  // True to enable downloads for this repository, false to disable them. Default is true.
  has_issues: boolean;  // True to enable issues for this repository, false to disable them. Default is true.
  has_wiki: boolean;  // True to enable the wiki for this repository, false to disable it. Default is true.
  homepage: string;
  name: string;
  private: boolean;  // True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
  team_id: number;  // The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
}
