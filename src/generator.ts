import { exists, mkdir, readFile, writeFile } from 'fs';
import { ensureDir } from 'fs-extra';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile } from 'swagger-parser';
import { promisify } from 'util';
import { MustacheData } from './types';
import { fileName } from './helper';
import { createMustacheViewModel } from './parser';

export async function generateAPIClient(swaggerFilePath: string, outputPath: string): Promise<void> {
  /* Create output folder if not already present */
  if (!await promisify(exists)(outputPath)) {
    await ensureDir(outputPath);
  }

  const mustacheData = createMustacheViewModel(await swaggerFile(swaggerFilePath));

  await generateClient(mustacheData, outputPath);
  await generateModels(mustacheData, outputPath);
  await generateModuleExportIndex(mustacheData, outputPath);
}

async function generateClient(viewContext: MustacheData, outputPath: string): Promise<void> {
  /* generate main API client class */
  const clientTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-service.mustache`)).toString();

  const result = Mustache.render(clientTemplate, viewContext);
  const outfile = join(outputPath, 'api-client.service.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
}

async function generateModels(viewContext: MustacheData, outputPath: string): Promise<void> {
  const outputDir = join(outputPath, 'models');
  const outIndexFile = join(outputDir, '/index.ts');

  const modelTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-model.mustache`)).toString();
  const modelExportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-models-export.mustache`)).toString();

  if (!await promisify(exists)(outputDir)) {
    await promisify(mkdir)(outputDir);
  }

  // generate model export index here
  await promisify(writeFile)(outIndexFile, Mustache.render(modelExportTemplate, viewContext), 'utf-8');

  // generate API models
  await Promise.all(viewContext.definitions.map(async (definition) => {
    const result = Mustache.render(modelTemplate, definition);
    const outfile = join(outputDir, `${fileName(definition.name, definition.isEnum ? 'enum' : 'model')}.ts`);

    await ensureDir(dirname(outfile));
    return promisify(writeFile)(outfile, result, 'utf-8');
  }));
}

async function generateModuleExportIndex(viewContext: MustacheData, outputPath: string): Promise<void> {
  const exportTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-module-export.mustache`)).toString();
  const result = Mustache.render(exportTemplate, viewContext);
  const outfile = join(outputPath, '/index.ts');

  await promisify(writeFile)(outfile, result, 'utf-8');
}
