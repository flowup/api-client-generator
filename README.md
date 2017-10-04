# ngx-swagger-client-generator
Angular REST API client generator from Swagger YAML or JSON file with camel case settigs

# Description
This package generates a Angular TypeScript classes from a Swagger v2.0 specification file. The code is generated using Mustache templates.

The generated service class uses new [HttpClient](https://angular.io/guide/http) module of Angular 4.

# How to get it working

## Installation

`git clone https://github.com/flowup/ngx-swagger-client-generator`

`cd ngx-swagger-client-generator`

`yarn` or `npm install`

## Usage

`npm run generate -s ./path/to/swagger.[yaml|json]`

## Options

 - `s` -  path to the swagger file
 - `o` -  path where the generated files should be emitted

## Example usage:
This command will generate API client described in swagger.json file to ./output folder

`npm run generate -s ./path/to/swagger.json -o ./output`

## Note:
This project was inspired by [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen) project.
This project was based on [angular4-swagger-client-generator](https://github.com/lotjomik/angular4-swagger-client-generator) project.
