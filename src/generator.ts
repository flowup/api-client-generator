import { existsSync, mkdir, readFile, writeFile } from 'fs';
import { ensureDir } from 'fs-extra';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile, validate } from 'swagger-parser';
import { promisify } from 'util';
import { MustacheData, GenOptions } from './types';
import { fileName, logWarn, dashCase, getAllSwaggerTags } from './helper';
import { createMustacheViewModel } from './parser';


export async function generateAPIClient(options: GenOptions): Promise<void> {
  const swaggerFilePath = options.sourceFile;

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
  }).then(
    async () => {
      const swaggerDef = await swaggerFile(swaggerFilePath);
      const allTags: string[] = getAllSwaggerTags(swaggerDef);

      let tags = options.splitPathTags;
      if (tags === undefined || tags.length === 0) {
        tags = [''];
      } else if (tags && tags.length === 1 && tags[0] === 'all') {
        tags = allTags;
      }
      const createSubFolder = tags.length > 1;

      await Promise.all(tags.map(async tag => {
        const mustacheData = createMustacheViewModel(swaggerDef, tag);

        if (mustacheData.methods.length === 0) {
          logWarn(`No swagger paths with tag ${tag}`);
        } else {
          const subFolder = createSubFolder ? dashCase(tag) : '';
          const outputPath = join(options.outputPath, subFolder);
          if (!existsSync(outputPath)) {
            await ensureDir(outputPath);
          }
          await generateClient(mustacheData, outputPath);
          await generateModels(mustacheData, outputPath);
          if (!options.skipModuleExport) {
            await generateModuleExportIndex(mustacheData, outputPath);
          }
        }
      }));
    }
  ).catch((e) => console.error('Provided swagger file is invalid', e));
}

async function generateClient(viewContext: MustacheData, outputPath: string): Promise<void> {
  /* generate main API client class */
  const clientTemplate = (await promisify(readFile)(`${__dirname}/../templates/ngx-service.mustache`)).toString();

  const result = Mustache.render(clientTemplate, viewContext);
  const outfile = join(outputPath, `${viewContext.fileName}.ts`);

  await promisify(writeFile)(outfile, result, 'utf-8');
}

async function generateModels(viewContext: MustacheData, outputPath: string): Promise<void> {
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
