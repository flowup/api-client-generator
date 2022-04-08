import { mkdir, readFile, stat, writeFile } from 'fs';
import * as Handlebars from 'handlebars';
import { OpenAPIV2 } from 'openapi-types';
import { dirname, join } from 'path';
import * as SwaggerParser from 'swagger-parser';
import { promisify } from 'util';
import { TemplateData, Definition } from './types';
import {
  logWarn,
  dashCase,
  flattenAll,
  compareStringByKey,
  toCamelCase,
} from './helper';
import { createTemplateViewModel } from './parser';

const ALL_TAGS_OPTION = 'all';
export const MODEL_DIR_NAME = 'models';
export const MODEL_GUARDS_DIR_NAME = 'guards';

export async function generateAPIClient(
  options?: typeof global.GLOBAL_OPTIONS,
): Promise<string[]> {
  if (options) {
    // tslint:disable-next-line:no-object-mutation
    global.GLOBAL_OPTIONS = options;
  }

  const swaggerFilePath = global.GLOBAL_OPTIONS.sourceFile;

  try {
    await SwaggerParser.validate(swaggerFilePath, {
      parse: {
        json: { allowEmpty: false },
        yaml: { allowEmpty: false },
        binary: false,
        text: false,
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

  const swaggerDef = await SwaggerParser.parse(swaggerFilePath);
  const allTags = getAllSwaggerTags(swaggerDef.paths as OpenAPIV2.PathsObject);
  const specifiedTags = global.GLOBAL_OPTIONS.splitPathTags || [];
  const usedTags: (string | undefined)[] =
    specifiedTags.length === 0
      ? [undefined]
      : specifiedTags[0] === ALL_TAGS_OPTION
      ? allTags
      : specifiedTags;

  const apiTagsData = usedTags.map(tag =>
    createTemplateViewModel(swaggerDef as OpenAPIV2.Document, tag),
  );

  // sort the definitions by name and removes duplicates
  const allDefinitions = apiTagsData
    .map(({ definitions }) => definitions)
    .reduce<Definition[]>((acc, definitions) => [...acc, ...definitions], [])
    .sort(compareStringByKey('definitionName')) // tslint:disable-line:no-array-mutation
    .filter(({ definitionName }, index, self) =>
      index > 0 ? definitionName !== self[index - 1].definitionName : true,
    );

  const compileTemplate = async (fileName: string) =>
    Handlebars.compile((await promisify(readFile)(fileName)).toString());

  const compiledTemplates = {
    model: await compileTemplate(
      `${__dirname}/../templates/ngx-model.handlebars`,
    ),
    modelsGuards: await compileTemplate(
      `${__dirname}/../templates/ngx-models-guards-export.handlebars`,
    ),
    modelsExport: await compileTemplate(
      `${__dirname}/../templates/ngx-models-export.handlebars`,
    ),
    service: await compileTemplate(
      `${__dirname}/../templates/ngx-service.handlebars`,
    ),
    moduleExport: await compileTemplate(
      `${__dirname}/../templates/ngx-module-export.handlebars`,
    ),
    helperTypes: await compileTemplate(
      `${__dirname}/../templates/ngx-helper-types.handlebars`,
    ),
    header: await compileTemplate(
      `${__dirname}/../templates/header.handlebars`,
    ),
  };

  Handlebars.registerPartial('header', compiledTemplates['header']);

  Handlebars.registerHelper('camelCase', toCamelCase);
  Handlebars.registerHelper(
    'templateType',
    (
      // tslint:disable-next-line:no-any
      ...args: [string[], any]
    ) => {
      const conditions: string[] = args.slice(0, -1);
      const {
        data: { root },
      }: Handlebars.HelperOptions = args[args.length - 1];

      return conditions.includes(root.templateType);
    },
  );

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
      const clientOutputPath = join(
        global.GLOBAL_OPTIONS.outputPath,
        subFolder,
      );

      await promisify(stat)(clientOutputPath).catch(() =>
        promisify(mkdir)(clientOutputPath, { recursive: true }),
      );

      return flattenAll([
        generateFile(
          compiledTemplates['service'],
          `${apiTagData.serviceFileName}.ts`,
          { ...apiTagData, templateType: 'service' },
          clientOutputPath,
        ),
        generateFile(
          compiledTemplates['service'],
          `${apiTagData.interfaceFileName}.ts`,
          { ...apiTagData, templateType: 'interface' },
          clientOutputPath,
        ),
        ...(global.GLOBAL_OPTIONS.skipGuards
          ? []
          : [
              generateFile(
                compiledTemplates['service'],
                `guarded-${apiTagData.serviceFileName}.ts`,
                { ...apiTagData, templateType: 'guardedService' },
                clientOutputPath,
              ),
            ]),
        ...(global.GLOBAL_OPTIONS.skipModuleExport
          ? []
          : [
              generateFile(
                compiledTemplates['moduleExport'],
                `index.ts`,
                { ...apiTagData, options: global.GLOBAL_OPTIONS },
                clientOutputPath,
              ),
            ]),
      ]);
    }),
    generateFile(
      compiledTemplates['helperTypes'],
      `types.ts`,
      { options: global.GLOBAL_OPTIONS },
      global.GLOBAL_OPTIONS.outputPath,
    ),
    generateModels(
      compiledTemplates['model'],
      compiledTemplates['modelsExport'],
      allDefinitions,
      global.GLOBAL_OPTIONS.outputPath,
    ),
    ...(global.GLOBAL_OPTIONS.skipGuards
      ? []
      : [
          generateFile(
            compiledTemplates['modelsGuards'],
            `index.ts`,
            { definitions: allDefinitions },
            join(global.GLOBAL_OPTIONS.outputPath, MODEL_GUARDS_DIR_NAME),
          ),
        ]),
  ]);
}

async function generateFile<T = TemplateData | undefined>(
  compiledTemplate: HandlebarsTemplateDelegate<T>,
  fileName: string,
  viewContext: T,
  outputPath: string,
): Promise<string[]> {
  /* generate main API client class */
  const result = compiledTemplate(viewContext);
  const outfile = join(outputPath, fileName);

  await promisify(stat)(outputPath).catch(() =>
    promisify(mkdir)(outputPath, { recursive: true }),
  );

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateModels(
  modelCompiledTemplate: HandlebarsTemplateDelegate<Definition>,
  modelExportCompiledTemplate: HandlebarsTemplateDelegate<{
    definitions: Definition[];
  }>,
  definitions: Definition[],
  outputPath: string,
): Promise<string[]> {
  const outputDir = join(outputPath, MODEL_DIR_NAME);
  const outIndexFile = join(outputDir, '/index.ts');

  await promisify(stat)(outputDir).catch(() =>
    promisify(mkdir)(outputDir, { recursive: true }),
  );

  // generate model export index for all the generated models
  await promisify(writeFile)(
    outIndexFile,
    modelExportCompiledTemplate({ definitions }),
    'utf-8',
  );

  // generate API models
  return Promise.all([
    ...definitions.map(async definition => {
      const result = modelCompiledTemplate(definition);
      const outfile = join(outputDir, `${definition.fileName}.ts`);

      const directoryName = dirname(outfile);
      await promisify(stat)(directoryName).catch(() =>
        promisify(mkdir)(directoryName, { recursive: true }),
      );
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    }),
    outIndexFile,
  ]);
}

export function getAllSwaggerTags(paths: {
  [pathName: string]: OpenAPIV2.PathsObject;
}): string[] {
  const allTags = Object.values(paths)
    .map(pathDef =>
      // get tags from all the paths and flatten with reduce
      Object.values(pathDef)
        .map(({ tags }: OpenAPIV2.OperationObject) => tags || [])
        .reduce<string[]>((acc, tags) => [...acc, ...tags], []),
    )
    .reduce<string[]>((acc, tags) => [...acc, ...tags], []); // array of tags fatten with reduce

  return Array.from(new Set(allTags));
}
