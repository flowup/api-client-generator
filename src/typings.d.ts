export {};

declare global {
  namespace NodeJS {
    interface Global {
      GLOBAL_OPTIONS: {
        outputPath: string;
        splitPathTags: string[];
        skipModuleExport: boolean;
        skipGuards: boolean;
        sourceFile: string;
      };
    }
  }
}
