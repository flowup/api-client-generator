[![npm](https://img.shields.io/npm/v/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)
[![npm](https://img.shields.io/npm/l/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)
[![npm](https://img.shields.io/npm/dm/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)

[![Caretaker](https://img.shields.io/badge/caretaker-vmasek-blue.svg)](https://github.com/vmasek)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub stars](https://img.shields.io/github/stars/flowup/api-client-generator.svg?style=social&label=Star)](https://github.com/flowup/api-client-generator)
[![Twitter URL](https://img.shields.io/twitter/url/http/flowup.cz.svg?style=social)](https://twitter.com/intent/tweet?text=Tool%20that%20lets%20you%20generate%20API%20client%20from%20a%20swagger%20file&hashtags=angular,swagger,api,angular5&url=https://github.com/flowup/api-client-generator)

# api-client-generator
Angular REST API client generator from Swagger YAML or JSON file with camel case settings

Generated files are compatible with Angular 6 (should be compatible with 5 version too). RxJS imports are targeted for version 6.

# Description
This package generates a Angular TypeScript classes from a Swagger v2.0 specification file. The code is generated using Mustache templates.

The generated service class uses new [HttpClient](https://angular.io/guide/http) module of Angular (introduced in version 4.3).

# Compatibility

- **Angular 6** (should also work with 5 and 4.3+)
- **RxJS 6** (Observable imports)
  - in case of rxjs <6 update or rewrite the rxjs import to match older version

# Installation

### Global usage:

`[sudo] npm install -g api-client-generator`

This command will generate API client described in swagger.json file to ./output folder

`api-client-generator -s ./path/to/swagger.json -o ./output`

### Local usage

`npm install api-client-generator --save-dev`

- for quick usage create run script in your `package.json` scripts
```
"scripts": {
  "generate-api-client": "api-client-generator -s ./swagger.yaml -o ./output-folder"
},
```
- then just run

`npm run generate-api-client`

# Options

| Option           | Description                                       |
| ---------------- | ------------------------------------------------- |
| `-h`/`--help`    | print help and exit                               |
| `-s`/`--source`  | path to the swagger file (yaml or json)           |
| `-o`/`--output`  | path where the generated files should be emitted  |
| `-C`/`--commit`  | `git commit` generated changes **\***             |
| `-v`/`--verbose` | supply stack traces with outputted error messages |

**\*** The author of the commit will be `api-client-generator <api-client-generator@flowup.cz>`. 
If there are any staged changes in your repository, the generator will halt pre-generation with an error to prevent including your changes in the automatic commit.

# How to use generated client

1. import the `APIClientModule` in your `app.module.ts` (main module)
- domain and configuration should be passed to module imports using `.forRoot` method
- options and domain are optional
- when domain is not passed, host property form swagger file is used as default
  - if host property is not defined `window.href` with current port is used instead

```typescript
@NgModule({
  imports: [
    /* Default configuration and all of it's properties is optional */
    APIClientModule.forRoot({
      domain: 'https://api.url', // or use value defined in environment `environment.apiUrl`
      httpOptions: {
        headers: {myCustomHeader: 'this will appear in every request as one of the headers'},
        params: {someParam: 'customParam'},
      }
    }),
    /* ... other imports */
    HttpClientModule, // <<= this is very important import
    // API client relies on HttpClient module and will throw and provider error if not there
  ],
  /* ... other stuff */
})
export class AppModule {
}
```

2. use `APIClient` service in your components/services/...

```typescript
@Component({
  selector: 'my-component',
  templateUrl: `
    <div *ngFor="let user of users$ | async">
      <p>User name: {{user.name}}</p>
    </div>
  `,
})
export class MyComponent {
  
  users$ = this.api.getUsers();

  constructor(private readonly api: APIClient) {
    this.api.getSomething().subscribe(
      (something: Something) => console.log('something', something)
    );
  }
}
```

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

# Common problems

### HttpClient not provided

This or very similar error means that you forgot to import `HttpClientModule` in your root module
```
StaticInjectorError(AppModule)[APIClient -> HttpClient]: 
  StaticInjectorError(Platform: core)[APIClient -> HttpClient]: 
    NullInjectorError: No provider for HttpClient!
```

Fix:
 - add `HttpClientModule` to your root module (see NgModule imports in [usage](https://github.com/flowup/api-client-generator#how-to-use-generated-client))

# Problem reporting and contributions

Please report any problems you have and issues you find so they can be resolved.
If the generator terminates with an error message, please re-run it with the `-v` flag and post the outputted stack trace.

Feel free to discuss desired improvements or functionality in issues. Afterwards the pull requests are very welcome.

-------

.

.

.

.

<small>*Inspired by [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)*</small>

<small>*Generator based on [angular4-swagger-client-generator](https://github.com/lotjomik/angular4-swagger-client-generator)*</small>
