import { existsSync, mkdir, readFile, writeFile } from 'fs';
import { ensureDir } from 'fs-extra';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { Operation, Path, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';
import { MustacheData, GenOptions, Definition } from './types';
import { fileName, logWarn, dashCase, flattenAll, compareStringByKey } from './helper';
import { createMustacheViewModel } from './parser';

const ALL_TAGS_OPTION = 'all';
export const MODEL_DIR_NAME = 'models';
export const MODEL_GUARDS_DIR_NAME = 'guards';

export async function generateAPIClient(options: GenOptions): Promise<string[]> {
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
      }
    });
  } catch (error) {
    throw new Error(`Provided swagger file "${swaggerFilePath}" is invalid: ${error}`);
  }

  const swaggerDef: Swagger = await swaggerFile(swaggerFilePath);
  const allTags = getAllSwaggerTags(swaggerDef.paths);
  const specifiedTags = options.splitPathTags || [];
  const usedTags: (string | undefined)[] = specifiedTags.length === 0
    ? [undefined]
    : specifiedTags[0] === ALL_TAGS_OPTION
      ? allTags
      : specifiedTags;

  const apiTagsData = usedTags.map(tag => createMustacheViewModel(swaggerDef, tag));

  // sort the definitions by name and removes duplicates
  const allDefinitions = apiTagsData.map(({definitions}) => definitions).reduce<Definition[]>(
    (acc, definitions) => [...acc, ...definitions], []
  )
    .sort(compareStringByKey('definitionName')) // tslint:disable-line:no-array-mutation
    .filter(({definitionName}, index, self) => index > 0 ? definitionName !== self[index - 1].definitionName : true);

  return flattenAll([
      ...apiTagsData.map(async apiTagData => {
        if (apiTagData.methods.length === 0) {
          logWarn(`No swagger paths with tag ${apiTagData.swaggerTag}`);
          return [];
        }

        const subFolder = usedTags && usedTags[0] ? `services/${dashCase(apiTagData.swaggerTag)}` : '';
        const clientOutputPath = join(options.outputPath, subFolder);

        if (!existsSync(clientOutputPath)) {
          await ensureDir(clientOutputPath);
        }

        return flattenAll([
          generateClient(apiTagData, clientOutputPath),
          generateClientInterface(apiTagData, clientOutputPath),
          generateGuardedClient(apiTagData, clientOutputPath),
          ...!options.skipModuleExport
            ? [generateModuleExportIndex(apiTagData, clientOutputPath)]
            : [],
        ]);
      }),
      generateModels(allDefinitions, options.outputPath),
      generateModelGuards(allDefinitions, options.outputPath),
    ]
  );
}

async function generateClient(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  /* generate main API client class */
  const clientTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-service.mustache`)).toString();
  const result = Mustache.render(clientTemplate, viewContext);
  const outfile = join(outputPath, `${viewContext.serviceFileName}.ts`);

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateGuardedClient(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  /* generate main API client class */
  const clientTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-guarded-service.mustache`)).toString();
  const result = Mustache.render(clientTemplate, viewContext);
  const outfile = join(outputPath, `guarded-${viewContext.serviceFileName}.ts`);

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateClientInterface(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const template = (await promisify(readFile)(`${__dirname}/../templates/ngx-service-interface.mustache`)).toString();
  const result = Mustache.render(template, viewContext);
  const outfile = join(outputPath, `${viewContext.interfaceFileName}.ts`);

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateModels(
  definitions: Definition[],
  outputPath: string,
): Promise<string[]> {
  const outputDir = join(outputPath, MODEL_DIR_NAME);
  const outIndexFile = join(outputDir, '/index.ts');

  const modelTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model.mustache`)).toString();
  const modelExportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-models-export.mustache`)).toString();

  if (!existsSync(outputDir)) {
    await promisify(mkdir)(outputDir);
  }

  // generate model export index for all the generated models
  await promisify(writeFile)(outIndexFile, Mustache.render(modelExportTemplate, {definitions}), 'utf-8');

  // generate API models
  return Promise.all([
    ...definitions.map(async (definition) => {
      const result = Mustache.render(modelTemplate, definition);
      const outfile = join(outputDir, `${fileName(definition.definitionName, definition.isEnum ? 'enum' : 'model')}.ts`);

      await ensureDir(dirname(outfile));
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    }),
    outIndexFile,
  ]);
}

async function generateModelGuards(
  definitions: Definition[],
  outputPath: string,
): Promise<string[]> {
  const outputDir = join(outputPath, MODEL_GUARDS_DIR_NAME);
  const outIndexFile = join(outputDir, '/index.ts');

  const modelGuardTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model-guard.mustache`)).toString();
  const modelGuardsExportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model-guards-export.mustache`)).toString();

  if (!existsSync(outputDir)) {
    await promisify(mkdir)(outputDir);
  }

  // generate model guards export index for all the generated models
  await promisify(writeFile)(outIndexFile,  Mustache.render(modelGuardsExportTemplate, {definitions}), 'utf-8');

  // generate API models
  return Promise.all([
    ...definitions.map(async (definition) => {
      const result = Mustache.render(modelGuardTemplate, definition);
      const outfile = join(outputDir, `${fileName(definition.definitionName, definition.isEnum ? 'enum' : 'model')}.guard.ts`);

      await ensureDir(dirname(outfile));
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    }),
    outIndexFile,
  ]);
}

async function generateModuleExportIndex(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const exportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-module-export.mustache`)).toString();
  const result = Mustache.render(exportTemplate, viewContext);
  const outfile = join(outputPath, '/index.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

export function getAllSwaggerTags(paths: { [pathName: string]: Path }): string[] {
  const allTags = Object.values(paths).map((pathDef) =>
    // get tags from all the paths and flatten with reduce
    Object.values(pathDef)
      .map(({tags}: Operation) => tags || [])
      .reduce<string[]>((acc, tags) => [...acc, ...tags], [])
  ).reduce<string[]>((acc, tags) => [...acc, ...tags], []); // array of tags fatten with reduce

  return Array.from(new Set(allTags));
}
