[![npm](https://img.shields.io/npm/v/%40flowup/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)
[![npm](https://img.shields.io/npm/l/%40flowup/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)
[![npm](https://img.shields.io/npm/dm/%40flowup/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)

[![Caretaker](https://img.shields.io/badge/caretaker-vmasek-blue.svg)](https://github.com/vmasek)

[![GitHub stars](https://img.shields.io/github/stars/flowup/api-client-generator.svg?style=social&label=Star)](https://github.com/flowup/api-client-generator)
[![Twitter URL](https://img.shields.io/twitter/url/http/flowup.cz.svg?style=social)](https://twitter.com/intent/tweet?text=Tool%20that%20lets%20you%20generate%20API%20client%20from%20a%20swagger%20file&hashtags=angular,swagger,api,angular5&url=https://github.com/flowup/api-client-generator)

# api-client-generator
Angular REST API client generator from Swagger YAML or JSON file with camel case settings

# Description
This package generates a Angular TypeScript classes from a Swagger v2.0 specification file. The code is generated using Mustache templates.

The generated service class uses new [HttpClient](https://angular.io/guide/http) module of Angular (introduced in version 4.3).

# Installation

## Global usage:

`[sudo] yarn global add api-client-generator`

or

`[sudo] npm install -g api-client-generator`

This command will generate API client described in swagger.json file to ./output folder

`api-client-generator -s ./path/to/swagger.json -o ./output`

## Local usage

`yarn add api-client-generator`

or

`npm install api-client-generator`

- for quick usage create run script in your `package.json` scripts
```
"scripts": {
  "generate-api-client": "api-client-generator -s ./swagger.yaml -o ./output-folder"
},
```
- then just run

`npm run generate-api-client`

# Options

 - `s` -  path to the swagger file (yaml or json)
 - `o` -  path where the generated files should be emitted

# Generated structure

- if you are interested on how will the generated client with models look like, take a look in a `example/` folder

```
output
 ├─ models
 │   ├─ some.enum.ts
 │   ├─ some.model.ts
 │   │  ...
 │   ├─ another.model.ts
 │   └─ index.ts
 ├─ api-client.service.ts
 └─ index.ts
```

-------

*Inspired by [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)*

*Generator based on [angular4-swagger-client-generator](https://github.com/lotjomik/angular4-swagger-client-generator)*
