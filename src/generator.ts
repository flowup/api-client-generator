import { exists, mkdir, readFile, writeFile } from 'fs';
import {
  compile,
  HelperOptions,
  registerHelper,
  registerPartial,
} from 'handlebars';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { Operation, Path, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';
import { TemplateData, GenOptions, Definition } from './types';
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
    createTemplateViewModel(swaggerDef, tag),
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
    compile((await promisify(readFile)(fileName)).toString());

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

  registerPartial('header', compiledTemplates['header']);

  registerHelper('camelCase', toCamelCase);
  registerHelper('templateType', (
    ...args: any[] /* fixme: with latest TS it should be [...string[], any] */
  ) => {
    const conditions: string[] = args.slice(0, -1);
    const {
      data: { root },
    }: HelperOptions = args[args.length - 1];

    return conditions.includes(root.templateType);
  });

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
        generateFile(
          compiledTemplates['service'],
          `guarded-${apiTagData.serviceFileName}.ts`,
          { ...apiTagData, templateType: 'guardedService' },
          clientOutputPath,
        ),
        ...(!options.skipModuleExport
          ? [
              generateFile(
                compiledTemplates['moduleExport'],
                `index.ts`,
                apiTagData,
                clientOutputPath,
              ),
            ]
          : []),
      ]);
    }),
    generateFile(
      compiledTemplates['helperTypes'],
      `types.ts`,
      undefined,
      options.outputPath,
    ),
    generateModels(
      compiledTemplates['model'],
      compiledTemplates['modelsExport'],
      allDefinitions,
      options.outputPath,
    ),
    generateFile(
      compiledTemplates['modelsGuards'],
      `index.ts`,
      { definitions: allDefinitions },
      join(options.outputPath, MODEL_GUARDS_DIR_NAME),
    ),
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

  if (!(await promisify(exists)(outputPath))) {
    await promisify(mkdir)(outputPath, { recursive: true });
  }

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

  if (!(await promisify(exists)(outputDir))) {
    await promisify(mkdir)(outputDir, { recursive: true });
  }

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
      if (!(await promisify(exists)(directoryName))) {
        await promisify(mkdir)(directoryName, { recursive: true });
      }
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    }),
    outIndexFile,
  ]);
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
