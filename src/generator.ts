import { createWriteStream, exists, existsSync, mkdir, readFile, writeFile, WriteStream } from 'fs';
import { ensureDir } from 'fs-extra';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { promisify } from 'util';
import { MustacheData, GenOptions } from './types';
import { fileName, logWarn, dashCase, getAllSwaggerTags, flattenAll } from './helper';
import { createMustacheViewModel } from './parser';

const ALL_TAGS_OPTION = 'all';
export const MODEL_DIR_NAME = 'models';

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
    throw new Error(`Provided swagger file "${swaggerFilePath}" is invalid`);
  }

  const swaggerDef = await swaggerFile(swaggerFilePath);
  const allTags = getAllSwaggerTags(swaggerDef);
  const specifiedTags = options.splitPathTags || [];
  const usedTags: (string | undefined)[] = specifiedTags.length === 0
    ? [undefined]
    : specifiedTags[0] === ALL_TAGS_OPTION
      ? allTags
      : specifiedTags;

  const modelsOutputDir = join(options.outputPath, MODEL_DIR_NAME);

  const modelTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model.mustache`)).toString();
  const modelExportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-models-export.mustache`)).toString();

  if (!(await promisify(exists)(options.outputPath))) {
    await promisify(mkdir)(options.outputPath);
  }

  if (!(await promisify(exists)(modelsOutputDir))) {
    await promisify(mkdir)(modelsOutputDir);
  }

  await promisify(writeFile)(`${options.outputPath}/models/index.ts`, '/* tslint:disable */\n\n', 'utf-8');
  const modelsIndexFileStream = createWriteStream(`${options.outputPath}/models/index.ts`, {flags: 'a'});


  return flattenAll(
    usedTags.map(async tag => {
      const mustacheData = createMustacheViewModel(swaggerDef, tag);

      if (mustacheData.methods.length === 0) {
        logWarn(`No swagger paths with tag ${tag}`);
        return [];
      }

      const subFolder = usedTags && usedTags[0] ? `services/${dashCase(tag)}` : '';
      const clientOutputPath = join(options.outputPath, subFolder);

      if (!existsSync(clientOutputPath)) {
        await ensureDir(clientOutputPath);
      }

      return flattenAll([
        generateClient(mustacheData, clientOutputPath),
        generateClientInterface(mustacheData, clientOutputPath),
        generateModels(mustacheData, modelsOutputDir, modelsIndexFileStream, modelTemplate, modelExportTemplate),
        ...!options.skipModuleExport
          ? [generateModuleExportIndex(mustacheData, clientOutputPath)]
          : [],
      ]);
    })
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

async function generateClientInterface(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const template = (await promisify(readFile)(`${__dirname}/../templates/ngx-service-interface.mustache`)).toString();
  const result = Mustache.render(template, viewContext);
  const outfile = join(outputPath, `${viewContext.interfaceFileName}.ts`);

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}

async function generateModels(
  viewContext: MustacheData,
  outputDir: string,
  exportIndexStream: WriteStream,
  modelTemplate: string,
  modelExportTemplate: string,
): Promise<string[]> {
  // write the model exports to export index stream
  exportIndexStream.write(Mustache.render(modelExportTemplate, viewContext));

  // generate API models
  return Promise.all([
    ...viewContext.definitions.map(async (definition) => {
      const result = Mustache.render(modelTemplate, definition);
      const outfile = join(outputDir, `${fileName(definition.name, definition.isEnum ? 'enum' : 'model')}.ts`);

      await ensureDir(dirname(outfile));
      await promisify(writeFile)(outfile, result, 'utf-8');
      return outfile;
    })
  ]);
}

async function generateModuleExportIndex(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const exportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-module-export.mustache`)).toString();
  const result = Mustache.render(exportTemplate, viewContext);
  const outfile = join(outputPath, '/index.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}
