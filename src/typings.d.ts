import Global = NodeJS.Global;

declare var global: Global & {
  GLOBAL_OPTIONS: {
    outputPath: string;
    splitPathTags: string[];
    skipModuleExport: boolean;
    skipGuards: boolean;
    sourceFile: string;
  };
};
