[![npm](https://img.shields.io/npm/v/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)
[![license](https://user-images.githubusercontent.com/7274335/42030802-46abac1e-7ad4-11e8-971e-e8b549a922d0.png)](https://www.npmjs.com/package/api-client-generator)
[![npm](https://img.shields.io/npm/dm/api-client-generator.svg)](https://www.npmjs.com/package/api-client-generator)

[![Caretaker](https://user-images.githubusercontent.com/7274335/42030799-466edd34-7ad4-11e8-9a47-37f12ac8d153.png)](https://github.com/vmasek)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://user-images.githubusercontent.com/7274335/42030800-4690ea1e-7ad4-11e8-9e37-6fe8b2cb3801.png)](https://conventionalcommits.org)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/api-client-gen)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/flowup/api-client-generator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/flowup/api-client-generator/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/flowup/api-client-generator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/flowup/api-client-generator/context:javascript)

[![GitHub stars](https://img.shields.io/github/stars/flowup/api-client-generator.svg?style=social&label=Star)](https://github.com/flowup/api-client-generator)
[![tweet](https://user-images.githubusercontent.com/7274335/42030803-46cd231c-7ad4-11e8-992c-2a5b933383c9.png)](https://twitter.com/intent/tweet?text=Tool%20that%20lets%20you%20generate%20API%20client%20from%20a%20swagger%20file&hashtags=angular,swagger,api,angular5&url=https://github.com/flowup/api-client-generator)

# API client generator

Angular REST API client generator from Swagger YAML or JSON file with camel case settings

![Logo](https://raw.githubusercontent.com/flowup/api-client-generator/master/api-client-generator-logo.png)

# Description

This package generates an Angular TypeScript class from a Swagger v2.0 specification file. The code is generated using Mustache templates.

The generated service class uses new [HttpClient](https://angular.io/guide/http) module of Angular (introduced in version 4.3).

### Motivation

This tool provides an easy and sustainable solution for making the classic REST API feel like you wish it has felt in TypeScript.

It starts by having the same data models at front-end and back-end, then continues with API client interface in form of service build on Angular HTTP client. Everything is typed and described in the way developer don't even need to study the API endpoints.

All you need to set it up is an up to date swagger file and Angular project.

##### How is this relevant for you?

A lot of developers is struggling with how to properly use the REST API in their apps. In Angular, we have a great opportunity which is HTTP Client supporting types. It is a great experience when you can work on a project where your models and data service are pre-generated and you can focus on state management, UI and business logic.

# Compatibility

This generator focuses on supporting latest Angular/RxJS versions.

- **Angular 9+**
- **RxJS 6+** (Observable imports)

  - in case of rxjs <6 please update or rewrite the rxjs imports to match the older version

## Older versions

If you need compatibility for Angular 7 and less, It might require some additional steps. In case of problems try editing necessary imports manually or downgrading to older generator versions (4.6.0 and bellow), although it is not recommended as patches and fixes might not be present in older versions.

See the [Changelog](https://github.com/flowup/api-client-generator/blob/master/CHANGELOG.md) to keep up with the features and changes.

# Usage

This command will generate API client described in the swagger.json file to the `./output` folder.

`npx api-client-generator -s ./path/to/swagger.json -o ./output`

This command will do the same, but it will split **all of the tags to separate API services** and models folder will be shared. All will be generated to specified path and that is `./src/api` folder.

`npx api-client-generator -t all -s ./path/to/swagger.yaml -o ./src/api"`

### Script in Package JSON

`npm install api-client-generator --save-dev`

- for quick usage create run script in your `package.json` scripts.

```
"scripts": {
  "generate-api-client": "api-client-generator -s ./swagger.yaml -o ./output-folder"
},
```

**Recommended:**

- use a "tag" (`-t all`) option to generate all (or list of specific) services separately

```
"scripts": {
  "generate-api-client": "api-client-generator -s ./swagger.yaml -o ./output-folder -t all"
},
```

- then just run

`npm run generate-api-client`

**NOTE**: if you want to skip the installation for project, you can use `npx` but be careful as you'll be using the latest version every time you run the script (We use [SEMVER](https://semver.org/) so it is safer to update over the time).

# Options

| Option                 | Description                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| `-h`/`--help`          | print help and exit                                                                                  |
| `-s`/`--source`        | path to the swagger file (YAML or JSON)                                                              |
| `-o`/`--output`        | path where the generated files should be emitted                                                     |
| `-C`/`--commit`        | `git commit` generated changes \*                                                                    |
| `-v`/`--verbose`       | supply stack traces with outputted error messages                                                    |
| `-t`/`--splitPathTags` | generate services and models only for the specified tags. Use `,` as the separator for multiple tags |
|                        | use `all` to emit all as a service per tag                                                           |
| `-m`/`--skipModule`    | skip creating the index file with module export                                                      |

<small>\* The author of the commit will be `api-client-generator <api-client-generator@flowup.cz>`.
If there are any staged changes in your repository, the generator will halt pre-generation with an error to prevent including your changes in the automatic commit.\*</small>

# How to use generated client

1. import the `APIClientModule` in your `app.module.ts` (main module)

- domain and configuration should be passed to module imports using `.forRoot` method
- options and domain are optional
- when a domain is not passed, host property form swagger file is used as a default
  - if host property is not defined `window.href` with a current port is used instead

```typescript
@NgModule({
  imports: [
    /* Default configuration and all of it's properties is optional */
    APIClientModule.forRoot({
      domain: 'https://api.url', // or use value defined in environment `environment.apiUrl`
      httpOptions: {
        headers: {
          myCustomHeader:
            'this will appear in every request as one of the headers',
        },
        params: { someParam: 'customParam' },
      },
    }),
    /* ... other imports */
    HttpClientModule, // <<= this is very important import
    // API client relies on HttpClient module and will throw and provider error if not there
  ],
  /* ... other stuff */
})
export class AppModule {}
```

2. use `APIClient` service in your components/services/...

```typescript
@Component({
  selector: 'my-component',
  templateUrl: `
    <div *ngFor="let user of users">
      <p>User name: {{user.name}}</p>
    </div>
  `,
})
export class MyComponent {
  users: User[] = [];

  constructor(private readonly api: APIClient) {
    this.api.getUsers().subscribe(users => (this.users = users));
  }
}
```

# Generated structure

- if you are interested in how will the generated client with models look like, take a look in an `example/` folder

```
output
 ├─ models
 │   ├─ some.enum.ts
 │   ├─ some.model.ts
 │   │  ...
 │   ├─ another.model.ts
 │   └─ index.ts
 ├─ api-client.interface.ts
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

**Fix:**

- add `HttpClientModule` to your root module (see NgModule imports in [usage](https://github.com/flowup/api-client-generator#how-to-use-generated-client))

### Numeric Enums keys generated as plane number

If some of your numeric enums look like this, the problem might be that in the swagger file you are not describing the keys properly.

```
export enum MyEnum {
  0 = 0,
  1 = 1,
  2 = 2,
}
```

**Fix**
We currently support two options:

- formatting description into array of `['1 Foo', '2 Bar']`
- using `'x-enumNames'` custom property that should be in format `['Foo', 'Bar']`

# Problem reporting and contributions

Please report any problems you have any issues you find so they can be resolved.
If the generator terminates with an error message, please re-run it with the `-v` flag and post the outputted stack trace.

Feel free to discuss desired improvements or functionality in issues. Afterwards, the pull requests are very welcome.

## Development

If you are interested in contributing please follow these steps:

1. [Create the issue](https://github.com/flowup/api-client-generator/issues/new) and discuss the problem
2. Fork the repo
3. Run `npm run dev:install` instead of `npm install` to install all (even test) dependencies
4. Add your feature/fix
   - follow the code style
   - check for the lint errors
   - in case of questions visit [gitter](https://gitter.im/api-client-gen) to chat with contributors
5. Run the tests `npm run tests`
6. Open the PR to [upstream master](https://github.com/flowup/api-client-generator/compare)
   - mention the issue/bug/feature it solves/closes

---

.

.

.

.

<small>_Inspired by [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)_</small>

<small>_Generator based on [angular4-swagger-client-generator](https://github.com/lotjomik/angular4-swagger-client-generator)_</small>
