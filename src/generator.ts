import { exists, mkdir, readFile, writeFile } from 'fs';
import { render as mustacheRender } from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { Operation, Path, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';
import { MustacheData, GenOptions, Definition } from './types';
import {
  fileName,
  logWarn,
  dashCase,
  flattenAll,
  compareStringByKey,
} from './helper';
import { createMustacheViewModel } from './parser';

const ALL_TAGS_OPTION = 'all';
export const MODEL_DIR_NAME = 'models';
export const MODEL_GUARDS_DIR_NAME = 'guards';

export async function generateAPIClient(
  options: GenOptions,
): Promise<string[]> {
  const swaggerFilePath = options.sourceFile;

  try {
    await validate(swaggerFilePath, {
      allow: {
        json: true,
        yaml: true,
        empty: false,
        unknown: false,
      },
      validate: {
        schema: true,
        spec: true,
      },
    });
  } catch (error) {
    throw new Error(
      `Provided swagger file "${swaggerFilePath}" is invalid: ${error}`,
    );
  }

  const swaggerDef: Swagger = await swaggerFile(swaggerFilePath);
  const allTags = getAllSwaggerTags(swaggerDef.paths);
  const specifiedTags = options.splitPathTags || [];
  const usedTags: (string | undefined)[] =
    specifiedTags.length === 0
      ? [undefined]
      : specifiedTags[0] === ALL_TAGS_OPTION
      ? allTags
      : specifiedTags;

  const apiTagsData = usedTags.map(tag =>
    createMustacheViewModel(swaggerDef, tag),
  );

  // sort the definitions by name and removes duplicates
  const allDefinitions = apiTagsData
    .map(({ definitions }) => definitions)
    .reduce<Definition[]>((acc, definitions) => [...acc, ...definitions], [])
    .sort(compareStringByKey('definitionName')) // tslint:disable-line:no-array-mutation
    .filter(({ definitionName }, index, self) =>
      index > 0 ? definitionName !== self[index - 1].definitionName : true,
    );

  const loadTemplate = async (fileName: string) =>
    (await promisify(readFile)(fileName)).toString();

  const templates = {
    model: await loadTemplate(`${__dirname}/../templates/ngx-model.mustache`),
    modelsGuards: await loadTemplate(
      `${__dirname}/../templates/ngx-models-guards-export.mustache`,
    ),
    modelsExport: await loadTemplate(
      `${__dirname}/../templates/ngx-models-export.mustache`,
    ),
    service: await loadTemplate(
      `${__dirname}/../templates/ngx-service.mustache`,
    ),
    interface: await loadTemplate(
      `${__dirname}/../templates/ngx-service-interface.mustache`,
    ),
    guardedService: await loadTemplate(
      `${__dirname}/../templates/ngx-guarded-service.mustache`,
    ),
    moduleExport: await loadTemplate(
      `${__dirname}/../templates/ngx-module-export.mustache`,
    ),
  };

  return flattenAll([
    ...apiTagsData.map(async apiTagData => {
      if (apiTagData.methods.length === 0) {
        logWarn(`No swagger paths with tag ${apiTagData.swaggerTag}`);
        return [];
      }

      const subFolder =
        usedTags && usedTags[0]
          ? `services/${dashCase(apiTagData.swaggerTag)}`
          : '';
      const clientOutputPath = join(options.outputPath, subFolder);

      if (!(await promisify(exists)(clientOutputPath))) {
        await promisify(mkdir)(clientOutputPath, { recursive: true });
      }

      return flattenAll([
        generateFile(
          templates['service'],
          `${apiTagData.serviceFileName}.ts`,
          apiTagData,
          clientOutputPath,
        ),
        generateFile(
          templates['interface'],
          `${apiTagData.interfaceFileName}.ts`,
          apiTagData,
          clientOutputPath,
        ),
        generateFile(
          templates['guardedService'],
          `guarded-${apiTagData.serviceFileName}.ts`,
          apiTagData,
          clientOutputPath,
        ),
        ...(!options.skipModuleExport
          ? [
              generateModuleExportIndex(
                templates['moduleExport'],
                apiTagData,
                clientOutputPath,
              ),
            ]
          : []),
      ]);
    }),
    generateModels(
      templates['model'],
      templates['modelsExport'],
      allDefinitions,
      options.outputPath,
    ),
    generateModelGuards(
      templates['modelsGuards'],
      allDefinitions,
      options.outputPath,
    ),
  ]);
}

async function generateFile(
  template: string,
  fileName: string,
  viewContext: MustacheData,
  outputPath: string,
): Promise<string[]> {
  /* generate main API client class */
  const result = mustacheRender(template, viewContext);
  const outfile = join(outputPath, fileName);

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateModels(
  modelTemplate: string,
  modelExportTemplate: string,
  definitions: Definition[],
  outputPath: string,
): Promise<string[]> {
  const outputDir = join(outputPath, MODEL_DIR_NAME);
  const outIndexFile = join(outputDir, '/index.ts');

  if (!(await promisify(exists)(outputDir))) {
    await promisify(mkdir)(outputDir, { recursive: true });
  }

  // generate model export index for all the generated models
  await promisify(writeFile)(
    outIndexFile,
    mustacheRender(modelExportTemplate, { definitions }),
    'utf-8',
  );

  // generate API models
  return Promise.all([
    ...definitions.map(async definition => {
      const result = mustacheRender(modelTemplate, definition);
      const outfile = join(
        outputDir,
        `${fileName(
          definition.definitionName,
          definition.isEnum ? 'enum' : 'model',
        )}.ts`,
      );

      const directoryName = dirname(outfile);
      if (!(await promisify(exists)(directoryName))) {
        await promisify(mkdir)(directoryName, { recursive: true });
      }
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    }),
    outIndexFile,
  ]);
}

async function generateModelGuards(
  template: string,
  definitions: Definition[],
  outputPath: string,
): Promise<string[]> {
  const outputDir = join(outputPath, MODEL_GUARDS_DIR_NAME);
  const outIndexFile = join(outputDir, '/index.ts');

  if (!(await promisify(exists)(outputDir))) {
    await promisify(mkdir)(outputDir, { recursive: true });
  }

  // generate model guards export index with all the generated guards
  await promisify(writeFile)(
    outIndexFile,
    mustacheRender(template, { definitions }),
    'utf-8',
  );

  // generate API models
  return [outIndexFile];
}

async function generateModuleExportIndex(
  template: string,
  viewContext: MustacheData,
  outputPath: string,
): Promise<string[]> {
  const result = mustacheRender(template, viewContext);
  const outfile = join(outputPath, '/index.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

export function getAllSwaggerTags(paths: {
  [pathName: string]: Path;
}): string[] {
  const allTags = Object.values(paths)
    .map(pathDef =>
      // get tags from all the paths and flatten with reduce
      Object.values(pathDef)
        .map(({ tags }: Operation) => tags || [])
        .reduce<string[]>((acc, tags) => [...acc, ...tags], []),
    )
    .reduce<string[]>((acc, tags) => [...acc, ...tags], []); // array of tags fatten with reduce

  return Array.from(new Set(allTags));
}
