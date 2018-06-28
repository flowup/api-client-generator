declare module '*package.json' {
  export const version: string;
}

declare module 'dir-compare' {
  export function compare(path1: string, path2: string, config: { [key: string]: string | boolean }): Promise<Result>;

  export type State = 'equal' | 'left' | 'right' | 'distinct';

  export interface DiffSet {
    path1: string; // absolute path not including file/directory name,
    path2: string; // absolute path not including file/directory name,
    relativePath: string; // common path relative to root,
    name1: string; // file/directory name
    name2: string; // file/directory name
    state: State; // state of difference between compared files
    type1: string; // one of missing, file, directory
    type2: string; // one of missing, file, directory
    size1: string; // file size
    size2: string; // file size
    date1: string; // modification date (stat.mtime)
    date2: string; // modification date (stat.mtime)
    level: number; // depth
  }

  export interface Result {
    distinct: number; // of distinct entries
    equal: number; // of equal entries
    left: number; // of entries only in path1
    right: number; // of entries only in path2
    differences: number; // total differences (distinct+left+right)
    distinctFiles: number; // of distinct files
    equalFiles: number; // of equal files
    leftFiles: number; // of files only in path1
    rightFiles: number; // of files only in path2
    differencesFiles: number; // total different files (distinctFiles+leftFiles+rightFiles)
    distinctDirs: number; // of distinct directories
    equalDirs: number; // of equal directories
    leftDirs: number; // of directories only in path1
    rightDirs: number; // of directories only in path2
    differencesDirs: number; // total different directories (distinctDirs+leftDirs+rightDirs)
    same: boolean  // true if directories are identical
    diffSet: DiffSet[];
  }
}
