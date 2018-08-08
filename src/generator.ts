import { existsSync, mkdir, readFile, writeFile } from 'fs';
import { ensureDir } from 'fs-extra';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { promisify } from 'util';
import { MustacheData, GenOptions } from './types';
import { fileName, logWarn, dashCase, getAllSwaggerTags, flattenAll } from './helper';
import { createMustacheViewModel } from './parser';

const ALL_TAGS_OPTION = 'all';

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
  const usedTags: (string | undefined)[] = specifiedTags.length === 0 ?
    [undefined] :
    specifiedTags[0] === ALL_TAGS_OPTION ?
      allTags :
      specifiedTags;

  return flattenAll(
    usedTags.map(async tag => {
      const mustacheData = createMustacheViewModel(swaggerDef, tag);
      if (mustacheData.methods.length === 0) {
        logWarn(`No swagger paths with tag ${tag}`);
        return [];
      }

      const subfolder = usedTags.length > 1 ? dashCase(tag) : '';
      const outputPath = join(options.outputPath, subfolder);
      if (!existsSync(outputPath)) {
        await ensureDir(outputPath);
      }
      return flattenAll([
        generateClient(mustacheData, outputPath),
        generateClientInterface(mustacheData, outputPath),
        generateModels(mustacheData, outputPath),
        ...!options.skipModuleExport ?
          [generateModuleExportIndex(mustacheData, outputPath)] :
          [],
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

async function generateModels(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const outputDir = join(outputPath, 'models');
  const outIndexFile = join(outputDir, '/index.ts');

  const modelTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model.mustache`)).toString();
  const modelExportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-models-export.mustache`)).toString();

  if (!existsSync(outputDir)) {
    await promisify(mkdir)(outputDir);
  }

  // generate model export index here
  await promisify(writeFile)(outIndexFile, Mustache.render(modelExportTemplate, viewContext), 'utf-8');

  // generate API models
  return Promise.all(viewContext.definitions.map(async (definition) => {
    const result = Mustache.render(modelTemplate, definition);
    const outfile = join(outputDir, `${fileName(definition.name, definition.isEnum ? 'enum' : 'model')}.ts`);

    await ensureDir(dirname(outfile));
    await promisify(writeFile)(outfile, result, 'utf-8');
    return outfile;
  }));
}

async function generateModuleExportIndex(viewContext: MustacheData, outputPath: string): Promise<string[]> {
  const exportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-module-export.mustache`)).toString();
  const result = Mustache.render(exportTemplate, viewContext);
  const outfile = join(outputPath, '/index.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
  return [outfile];
}
