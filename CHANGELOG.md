# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.0-beta.0](https://github.com/flowup/api-client-generator/compare/4.7.1...5.0.0-beta.0) (2020-12-22)


### ⚠ BREAKING CHANGES

* **api-client:** generator now ignores bodies for requests that should not send any body, only PUT, PATCH and POST should contain body and it is handled as optional
* **generator:** if you import `DefaultHttpOptions`, `HttpOptions` or `APIClientModuleConfig` you need to adjust your imports to file `./types` at the top of your "output" path

### Features

* **api-client:** body request based on the request type and the parameter ([d0309b0](https://github.com/flowup/api-client-generator/commit/d0309b06a91f7c7b5f315f1071620818299fe4da))
* **api-client:** method params property docs comments ([7a1eddf](https://github.com/flowup/api-client-generator/commit/7a1eddf6accd0e519ab0a17e481ef1056b14b740))
* **api-client:** methods params extracted to separate property in api client interface ([53f3015](https://github.com/flowup/api-client-generator/commit/53f30150dcde9d803daafed5e711d19d0eea58ee)), closes [#91](https://github.com/flowup/api-client-generator/issues/91)
* **api-client:** observe support for HttpResponse and HttpEvent ([cdf2c6d](https://github.com/flowup/api-client-generator/commit/cdf2c6de045bb71e635be51112f45cad01b32f4d))
* **generator:** descriptions generated as single/multi line docs comments ([96a512d](https://github.com/flowup/api-client-generator/commit/96a512d3b91c25b79200b4bf12e41e47c9efb04c)), closes [#88](https://github.com/flowup/api-client-generator/issues/88)
* **generator:** https protocol preferred if mentioned in schemes ([c7f7d6f](https://github.com/flowup/api-client-generator/commit/c7f7d6fbba376f157a9290a2b795da61c68566b5))
* **generator:** method parameters args object optional if all of the params are optional ([9b77d74](https://github.com/flowup/api-client-generator/commit/9b77d740ddc55082da8b7cade4125f9fc78a4ad2)), closes [#69](https://github.com/flowup/api-client-generator/issues/69)
* **generator:** operation summary in descriptions ([b573759](https://github.com/flowup/api-client-generator/commit/b5737590aa912a39f904f6fe1e451d9bdb73b5ab)), closes [#112](https://github.com/flowup/api-client-generator/issues/112)
* **generator:** option to skip guards ([f4cc59f](https://github.com/flowup/api-client-generator/commit/f4cc59fc5d5393e3500d0779152d0b6e02613988)), closes [#105](https://github.com/flowup/api-client-generator/issues/105)
* **generator:** type interfaces for API client moved to one separate file ([f08ffb6](https://github.com/flowup/api-client-generator/commit/f08ffb628dc5d62fb446d4575b7f4f7b42469fc9))
* **generator:** united file header ([86fd135](https://github.com/flowup/api-client-generator/commit/86fd135359be2f681ea0e67a4f3ef6ace4cb2607)), closes [#108](https://github.com/flowup/api-client-generator/issues/108)
* **guard:** check for null at enum guards ([14320d5](https://github.com/flowup/api-client-generator/commit/14320d5d25d16a09e44bed38a02c7868431de016))
* **guard:** typeof object check for dictionaries of any ([4bf917a](https://github.com/flowup/api-client-generator/commit/4bf917ada9180bffe55ee0a2bfaa68b6f572d916))
* **models:** basic object properties as dictionary with key string and value of any ([7233c2d](https://github.com/flowup/api-client-generator/commit/7233c2d9cba0249bca3ba31bcd63b598eb6daf0b))
* **models:** description comments as docs comments before each property ([8c81f6c](https://github.com/flowup/api-client-generator/commit/8c81f6c294c4e4e8c0b99e7720bbb3569b3a8643))
* **models:** interface properties holding dictionaries and array combinations ([e3a33b6](https://github.com/flowup/api-client-generator/commit/e3a33b68959a68310b62508bc8a1664bad0092c7))
* **models:** property name non unicode chars escaped ([4dd4089](https://github.com/flowup/api-client-generator/commit/4dd4089f565e81f2ad6f5f97b85d3da8a24b16f5))


### Bug Fixes

* **api-client:** form data not set if undefined ([cd541a0](https://github.com/flowup/api-client-generator/commit/cd541a09ca1e6a9ad5eb419753608a3492e828ba))
* **generator:** default response used if no success code specified ([bc316f6](https://github.com/flowup/api-client-generator/commit/bc316f6f86cd5d28c6ba35e0ac2bbba824df920a))
* **generator:** service interface imported directly from interface file instead of export index ([d768fed](https://github.com/flowup/api-client-generator/commit/d768fed409ab04bb629a267290decb9b8ba0d9ed))
* **guard:** dictionaries as interface properties ([58b9126](https://github.com/flowup/api-client-generator/commit/58b91263a09094236ded5c3ab0087a48833a58fc))
* **guards:** any type results in empty guard ([83917a9](https://github.com/flowup/api-client-generator/commit/83917a9b8b26292778c61076533e208ddc880502)), closes [#98](https://github.com/flowup/api-client-generator/issues/98)
* **guards:** any used as type of array/object iteration items ([ef7be58](https://github.com/flowup/api-client-generator/commit/ef7be58ee053c7701dcf930ac3fd3d1c75b3dbc3))

### [4.7.1](https://github.com/flowup/api-client-generator/compare/4.7.0...4.7.1) (2020-10-19)


### Bug Fixes

* **cli:** rethrow errors in catch to see full trace stack in console ([943f7d2](https://github.com/flowup/api-client-generator/commit/943f7d2c68323ef581fed844697a790d66dd7555))
* **enums:** x-enumNames specified integers and description with new lines ([6a98b82](https://github.com/flowup/api-client-generator/commit/6a98b8293d399482ea4703e887564643533d33e2))

## [4.7.0](https://github.com/flowup/api-client-generator/compare/4.6.4...4.7.0) (2020-07-03)


### Features

* angular 10 module with providers compatibility ([7f69cc8](https://github.com/flowup/api-client-generator/commit/7f69cc837005838cb5256a6e7d44103bb91cf29c))

### [4.6.4](https://github.com/flowup/api-client-generator/compare/4.6.3...4.6.4) (2020-07-03)


### Bug Fixes

* **parser:** reference model name contains build-in type ([4593fae](https://github.com/flowup/api-client-generator/commit/4593fae5bd768147bee888e4a5ae5e6561835b92))

### [4.6.3](https://github.com/flowup/api-client-generator/compare/4.6.2...4.6.3) (2020-06-24)


### Bug Fixes

* **parser:** filtering already existing parent definitions to overcome recursion ([e292567](https://github.com/flowup/api-client-generator/commit/e292567c05f81f9380f0c6998f8542e9a67051ec))

### [4.6.2](https://github.com/flowup/api-client-generator/compare/4.6.1...4.6.2) (2020-01-24)


### Bug Fixes

* **generator:** object instad of `{ [key: string]: any }` ([0c29141](https://github.com/flowup/api-client-generator/commit/0c29141))
* **guards:** array nested in `additionalProperties` ([4f23f92](https://github.com/flowup/api-client-generator/commit/4f23f92))
* **guards:** method response basic type guards used instead of custom function for primitive types ([96ce207](https://github.com/flowup/api-client-generator/commit/96ce207))
* **models:** object instead of any in case of nested properties ([e8b7667](https://github.com/flowup/api-client-generator/commit/e8b7667))
* **service:** object instead of any in case of nested properties in method parameter ([4443ac3](https://github.com/flowup/api-client-generator/commit/4443ac3))
* **service:** object instead of any in case of nested properties in response ([277ee3f](https://github.com/flowup/api-client-generator/commit/277ee3f))

### [4.6.1](https://github.com/flowup/api-client-generator/compare/4.6.0...4.6.1) (2020-01-23)


### Bug Fixes

* **generator:** toCamelCase method removes duplicate words ([abe073d](https://github.com/flowup/api-client-generator/commit/abe073d))
* **guards:** array item typed as unknown for the guard iteration ([da654f7](https://github.com/flowup/api-client-generator/commit/da654f7))
* **guards:** circular dependency ([ecd1080](https://github.com/flowup/api-client-generator/commit/ecd1080))
* **guards:** escaped property names accessed via brackets ([1dbfe3a](https://github.com/flowup/api-client-generator/commit/1dbfe3a))
* **guards:** guarded service response type as explicit any ([785f022](https://github.com/flowup/api-client-generator/commit/785f022))
* **guards:** nested array types ([89da76c](https://github.com/flowup/api-client-generator/commit/89da76c))
* **guards:** object array types ([30113fe](https://github.com/flowup/api-client-generator/commit/30113fe))
* **guards:** objects with index signature as additional properties ([a6ef06c](https://github.com/flowup/api-client-generator/commit/a6ef06c))
* **guards:** union type string or enum with one value only ([ec040c4](https://github.com/flowup/api-client-generator/commit/ec040c4))

## [4.6.0](https://github.com/flowup/api-client-generator/compare/4.5.1...4.6.0) (2020-01-16)


### Bug Fixes

* **guard:** circular dependencies ([eae41be](https://github.com/flowup/api-client-generator/commit/eae41be))
* **guards:** object guard comparing typeof 'object' ([ffc8560](https://github.com/flowup/api-client-generator/commit/ffc8560))


### Features

* **method-params:** union types determined for enum like union strings and numbers ([324a95a](https://github.com/flowup/api-client-generator/commit/324a95a))
* **models:** union types for properties of enum like union strings and numbers ([0023555](https://github.com/flowup/api-client-generator/commit/0023555))

### [4.5.1](https://github.com/flowup/api-client-generator/compare/4.5.0...4.5.1) (2019-11-14)


### Bug Fixes

* **type-guards:** guards name definition and usage inconsistency ([5e00535](https://github.com/flowup/api-client-generator/commit/5e00535))

## [4.5.0](https://github.com/flowup/api-client-generator/compare/4.4.0...4.5.0) (2019-11-04)


### Features

* **generator:** type guards for each data model ([8cbdbbe](https://github.com/flowup/api-client-generator/commit/8cbdbbe))

## [4.4.0](https://github.com/flowup/api-client-generator/compare/4.3.0...4.4.0) (2019-08-28)


### Bug Fixes

* **cli:** option for tags now automatically uses "all" if tags are generated and no tag is provided ([e2cef2f](https://github.com/flowup/api-client-generator/commit/e2cef2f))


### Features

* **models:** additional properties supported ([535386c](https://github.com/flowup/api-client-generator/commit/535386c)), closes [#81](https://github.com/flowup/api-client-generator/issues/81)
* **models:** embedded allOf properties supported ([a42aa4f](https://github.com/flowup/api-client-generator/commit/a42aa4f)), closes [#80](https://github.com/flowup/api-client-generator/issues/80)



## [4.3.0](https://github.com/flowup/api-client-generator/compare/4.2.0...4.3.0) (2019-06-28)


### Bug Fixes

* **api-client:** support for blob response type ([d14ef9d](https://github.com/flowup/api-client-generator/commit/d14ef9d)), closes [#77](https://github.com/flowup/api-client-generator/issues/77)
* **methods:** recognizing return type if TS primitive or complex type ([8ee08e2](https://github.com/flowup/api-client-generator/commit/8ee08e2))


### Build System

* updated dependencies ([af07e3a](https://github.com/flowup/api-client-generator/commit/af07e3a))


### Features

* **api-client:** generating response for "lowest" of HTML success codes ([72a7b14](https://github.com/flowup/api-client-generator/commit/72a7b14))
* **api-client:** void return type for methods with empty schema ([f1977eb](https://github.com/flowup/api-client-generator/commit/f1977eb))
* **enums:** custom enum key names via custom x-enumNames property ([9cf1c8f](https://github.com/flowup/api-client-generator/commit/9cf1c8f))
* **form-data:** send form parameters as multi part form data ([c18c296](https://github.com/flowup/api-client-generator/commit/c18c296)), closes [#78](https://github.com/flowup/api-client-generator/issues/78)


### Tests

* jest instead of jasmine ([0836c0b](https://github.com/flowup/api-client-generator/commit/0836c0b))
* **angular-project:** jest instead of jasmine and karma ([2de02e7](https://github.com/flowup/api-client-generator/commit/2de02e7))
* **angular-project:** removed jasmine and karma deps ([784b181](https://github.com/flowup/api-client-generator/commit/784b181))
* **angular-project:** updated deps ([c4e8b97](https://github.com/flowup/api-client-generator/commit/c4e8b97))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/flowup/api-client-generator/compare/4.1.1...4.2.0) (2019-01-11)


### Features

* **models:** properties are optional as default, required stated explicitly ([04111d9](https://github.com/flowup/api-client-generator/commit/04111d9))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/flowup/api-client-generator/compare/4.1.0...4.1.1) (2019-01-11)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/flowup/api-client-generator/compare/4.0.1...4.1.0) (2019-01-11)


### Bug Fixes

* **api-client:** method parameters description and required flag ([8e02cc1](https://github.com/flowup/api-client-generator/commit/8e02cc1))
* **enum:** substitution of disallowed characters in key string ([7214f2b](https://github.com/flowup/api-client-generator/commit/7214f2b)), closes [#74](https://github.com/flowup/api-client-generator/issues/74)
* **generator:** Expose error from spec validation ([ebb74c7](https://github.com/flowup/api-client-generator/commit/ebb74c7))
* **license:** redundant lt/gt characters removed ([3b5f8d9](https://github.com/flowup/api-client-generator/commit/3b5f8d9))


### Features

* **model:** objects generated as key value maps ([b775b44](https://github.com/flowup/api-client-generator/commit/b775b44))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/flowup/api-client-generator/compare/4.0.0...4.0.1) (2018-09-01)


### Bug Fixes

* **models:** recursive model definitions filter ([c80631f](https://github.com/flowup/api-client-generator/commit/c80631f))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/flowup/api-client-generator/compare/3.6.2...4.0.0) (2018-08-31)


### Features

* **models:** model export index sorted and filtered for duplicates ([ca325d3](https://github.com/flowup/api-client-generator/commit/ca325d3))
* **tags:** clients generated to folder services when tag option used ([e7d3a08](https://github.com/flowup/api-client-generator/commit/e7d3a08))


### BREAKING CHANGES

* **tags:** models import path had changed as services now share the models folder

<a name="3.6.2"></a>
## [3.6.2](https://github.com/flowup/api-client-generator/compare/3.6.1...3.6.2) (2018-08-22)


### Bug Fixes

* **tags:** definition type name filter ([48b4fff](https://github.com/flowup/api-client-generator/commit/48b4fff))



<a name="3.6.1"></a>
## [3.6.1](https://github.com/flowup/api-client-generator/compare/3.6.0...3.6.1) (2018-08-22)


### Bug Fixes

* post install dependencies ([b511914](https://github.com/flowup/api-client-generator/commit/b511914))



<a name="3.6.0"></a>
# [3.6.0](https://github.com/flowup/api-client-generator/compare/3.5.0...3.6.0) (2018-08-22)


### Bug Fixes

* **api-client:** empty string as valid domain URL ([c99265e](https://github.com/flowup/api-client-generator/commit/c99265e))
* **api-client:** tag services names and module injection tokens ([6624de2](https://github.com/flowup/api-client-generator/commit/6624de2))
* **parser:** type prefixing fixed for nullables ([7aee02b](https://github.com/flowup/api-client-generator/commit/7aee02b))


### Features

* **git:** generated files added separately instead of whole path ([1a00bbd](https://github.com/flowup/api-client-generator/commit/1a00bbd))
* **main:** warning logged on legacy model discovery ([ad66cf7](https://github.com/flowup/api-client-generator/commit/ad66cf7))
* **parser:** x-nullable response flag supported ([d73924c](https://github.com/flowup/api-client-generator/commit/d73924c))



<a name="3.5.0"></a>
# [3.5.0](https://github.com/flowup/api-client-generator/compare/3.4.1...3.5.0) (2018-07-12)


### Bug Fixes

* **generator:** validate swagger file before parse ([cafa99f](https://github.com/flowup/api-client-generator/commit/cafa99f)), closes [#58](https://github.com/flowup/api-client-generator/issues/58)


### Features

* **api-client:** interface generated for service mocking purposes ([f10c9b3](https://github.com/flowup/api-client-generator/commit/f10c9b3))
* **autocommit:** implemented ([a9d5fd0](https://github.com/flowup/api-client-generator/commit/a9d5fd0))
* **api-client:** option to generate separate clients based on the path tags ([20addd1](https://github.com/flowup/api-client-generator/commit/20addd1))


<a name="3.4.1"></a>
## [3.4.1](https://github.com/flowup/api-client-generator/compare/3.4.0...3.4.1) (2018-06-22)


### Bug Fixes

* **generator:** swagger file validate against spec and schema ([59c3c1b](https://github.com/flowup/api-client-generator/commit/59c3c1b)), closes [#58](https://github.com/flowup/api-client-generator/issues/58)



<a name="3.4.0"></a>
# [3.4.0](https://github.com/flowup/api-client-generator/compare/3.3.0...3.4.0) (2018-06-20)


### Features

* **api-client:** global parameters for paths ([3cf7219](https://github.com/flowup/api-client-generator/commit/3cf7219))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/flowup/api-client-generator/compare/3.2.2...3.3.0) (2018-06-11)


### Bug Fixes

* **enums:** numeric enums values ([ce511c8](https://github.com/flowup/api-client-generator/commit/ce511c8))


### Features

* **api-client:** API method descriptions ([e7e767f](https://github.com/flowup/api-client-generator/commit/e7e767f)), closes [#29](https://github.com/flowup/api-client-generator/issues/29)
* **api-client:** API method parameter descriptions ([320fabc](https://github.com/flowup/api-client-generator/commit/320fabc)), closes [#29](https://github.com/flowup/api-client-generator/issues/29)
* **models, enums:** description for models and enums ([ae7262d](https://github.com/flowup/api-client-generator/commit/ae7262d)), closes [#29](https://github.com/flowup/api-client-generator/issues/29)



<a name="3.2.2"></a>
## [3.2.2](https://github.com/flowup/api-client-generator/compare/3.2.1...3.2.2) (2018-06-08)


### Bug Fixes

* **models:** extended interface name CamelCase instead of camelCase ([f6e39ad](https://github.com/flowup/api-client-generator/commit/f6e39ad))



<a name="3.2.1"></a>
## [3.2.1](https://github.com/flowup/api-client-generator/compare/3.2.0...3.2.1) (2018-06-08)


### Bug Fixes

* **models:** extending interface name corrected to camelCase ([b02dc2f](https://github.com/flowup/api-client-generator/commit/b02dc2f))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/flowup/api-client-generator/compare/3.1.1...3.2.0) (2018-06-07)


### Bug Fixes

* **models:** escape keys with non-word characters and ones starting with a number ([1757135](https://github.com/flowup/api-client-generator/commit/1757135)), closes [#54](https://github.com/flowup/api-client-generator/issues/54)


### Features

* **models:** extend interface with model in allOf property definition ([0d7b83c](https://github.com/flowup/api-client-generator/commit/0d7b83c)), closes [#53](https://github.com/flowup/api-client-generator/issues/53)



<a name="3.1.1"></a>
# [3.2.0](https://github.com/flowup/api-client-generator/compare/''3.1.0...3.1.1) (2018-06-01)


### Bug Fixes

* **api-client:** http options without headers and params constructing (AOT compatible) ([eca03c3](https://github.com/flowup/api-client-generator/commit/eca03c3)), closes [#47](https://github.com/flowup/api-client-generator/issues/47)
* **api-client:** possibly undefined http options params and headers ([539ba46](https://github.com/flowup/api-client-generator/commit/539ba46))
* **models:** model no longer stripped from the name of file if explicitly named that way ([dfdf90d](https://github.com/flowup/api-client-generator/commit/dfdf90d)), closes [#49](https://github.com/flowup/api-client-generator/issues/49)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/flowup/api-client-generator/compare/3.0.3...''3.1.0) (2018-05-07)


### Features

* **api-client:** rxjs 6 compatible import for Observable ([431d61f](https://github.com/flowup/api-client-generator/commit/431d61f))



<a name="3.0.3"></a>
## [3.0.3](https://github.com/flowup/api-client-generator/compare/3.0.0-alpha.1...3.0.3) (2018-04-06)


### Bug Fixes

* **api-client:** array method parameters and headers appended ([34ded75](https://github.com/flowup/api-client-generator/commit/34ded75)), closes [#36](https://github.com/flowup/api-client-generator/issues/36)
* **api-client:** basic types regex checks word boundaries ([f588fed](https://github.com/flowup/api-client-generator/commit/f588fed)), closes [#44](https://github.com/flowup/api-client-generator/issues/44)
* **api-client:** File, Blob, Date and Object types are not imported from models ([37e358b](https://github.com/flowup/api-client-generator/commit/37e358b)), closes [#27](https://github.com/flowup/api-client-generator/issues/27)
* **api-client:** form parameter used as body in request ([ce9f124](https://github.com/flowup/api-client-generator/commit/ce9f124)), closes [#40](https://github.com/flowup/api-client-generator/issues/40)
* **api-client:** models are not imported if there are none ([42cf4c0](https://github.com/flowup/api-client-generator/commit/42cf4c0)), closes [#31](https://github.com/flowup/api-client-generator/issues/31)
* **parser:** empty or native types parameters won't be generated into models ([ff55939](https://github.com/flowup/api-client-generator/commit/ff55939))
* **parser:** interface properties were skipped during generation ([3e694ad](https://github.com/flowup/api-client-generator/commit/3e694ad))


### Features

* **api-client:** create output dir even if path does not exists ([8ff9be8](https://github.com/flowup/api-client-generator/commit/8ff9be8)), closes [#34](https://github.com/flowup/api-client-generator/issues/34)
* **api-client:** method names with underscore converted to camelCase ([b09a679](https://github.com/flowup/api-client-generator/commit/b09a679)), closes [#37](https://github.com/flowup/api-client-generator/issues/37)
* **api-client:** method parameters nested to args object ([efaca5b](https://github.com/flowup/api-client-generator/commit/efaca5b)), closes [#8](https://github.com/flowup/api-client-generator/issues/8)
* **api-client:** optional param skipped if not in args ([135db91](https://github.com/flowup/api-client-generator/commit/135db91))
* **api-client:** reference parameters are dereferenced ([0a0de44](https://github.com/flowup/api-client-generator/commit/0a0de44))
* **api-client:** referenced method parameters generated and used ([0e26c53](https://github.com/flowup/api-client-generator/commit/0e26c53))
* **api-client:** support for head, options and patch http methods ([bd240f5](https://github.com/flowup/api-client-generator/commit/bd240f5))
* **api-client:** support for optional method parameters ([9d0cedc](https://github.com/flowup/api-client-generator/commit/9d0cedc)), closes [#8](https://github.com/flowup/api-client-generator/issues/8)
* **api-client:** when no operation id, method names generated from path and method type ([4afcdbc](https://github.com/flowup/api-client-generator/commit/4afcdbc))
* **enums:** numeric enums, using keys from description ([45bb096](https://github.com/flowup/api-client-generator/commit/45bb096)), closes [#28](https://github.com/flowup/api-client-generator/issues/28)
* **parser:** interface property type improvements, including nested array types ([c70d2a3](https://github.com/flowup/api-client-generator/commit/c70d2a3)), closes [#35](https://github.com/flowup/api-client-generator/issues/35)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/flowup/api-client-generator/compare/3.0.0-alpha.1...3.0.0) (2018-03-15)


### Bug Fixes

* **api-client:** array method parameters and headers appended ([34ded75](https://github.com/flowup/api-client-generator/commit/34ded75)), closes [#36](https://github.com/flowup/api-client-generator/issues/36)
* **api-client:** File, Blob, Date and Object types are not imported from models ([37e358b](https://github.com/flowup/api-client-generator/commit/37e358b)), closes [#27](https://github.com/flowup/api-client-generator/issues/27)
* **api-client:** form parameter used as body in request ([ce9f124](https://github.com/flowup/api-client-generator/commit/ce9f124)), closes [#40](https://github.com/flowup/api-client-generator/issues/40)
* **api-client:** models are not imported if there are none ([42cf4c0](https://github.com/flowup/api-client-generator/commit/42cf4c0)), closes [#31](https://github.com/flowup/api-client-generator/issues/31)
* **parser:** empty or native types parameters won't be generated into models ([ff55939](https://github.com/flowup/api-client-generator/commit/ff55939))
* **parser:** interface properties were skipped during generation ([3e694ad](https://github.com/flowup/api-client-generator/commit/3e694ad))


### Features

* **api-client:** create output dir even if path does not exists ([8ff9be8](https://github.com/flowup/api-client-generator/commit/8ff9be8)), closes [#34](https://github.com/flowup/api-client-generator/issues/34)
* **api-client:** method names with underscore converted to camelCase ([b09a679](https://github.com/flowup/api-client-generator/commit/b09a679)), closes [#37](https://github.com/flowup/api-client-generator/issues/37)
* **api-client:** method parameters nested to args object ([efaca5b](https://github.com/flowup/api-client-generator/commit/efaca5b)), closes [#8](https://github.com/flowup/api-client-generator/issues/8)
* **api-client:** optional param skipped if not in args ([135db91](https://github.com/flowup/api-client-generator/commit/135db91))
* **api-client:** reference parameters are dereferenced ([0a0de44](https://github.com/flowup/api-client-generator/commit/0a0de44))
* **api-client:** referenced method parameters generated and used ([0e26c53](https://github.com/flowup/api-client-generator/commit/0e26c53))
* **api-client:** support for head, options and patch http methods ([bd240f5](https://github.com/flowup/api-client-generator/commit/bd240f5))
* **api-client:** support for optional method parameters ([9d0cedc](https://github.com/flowup/api-client-generator/commit/9d0cedc)), closes [#8](https://github.com/flowup/api-client-generator/issues/8)
* **api-client:** when no operation id, method names generated from path and method type ([4afcdbc](https://github.com/flowup/api-client-generator/commit/4afcdbc))
* **enums:** numeric enums, using keys from description ([45bb096](https://github.com/flowup/api-client-generator/commit/45bb096)), closes [#28](https://github.com/flowup/api-client-generator/issues/28)
* **parser:** interface property type improvements, including nested array types ([c70d2a3](https://github.com/flowup/api-client-generator/commit/c70d2a3)), closes [#35](https://github.com/flowup/api-client-generator/issues/35)



<a name="3.0.0-alpha.1"></a>
# [3.0.0-alpha.1](https://github.com/flowup/api-client-generator/compare/3.0.0-alpha.0...3.0.0-alpha.1) (2018-02-26)


### Bug Fixes

* module template file ([8f813b6](https://github.com/flowup/api-client-generator/commit/8f813b6))



<a name="3.0.0-alpha.0"></a>
# [3.0.0-alpha.0](https://github.com/flowup/api-client-generator/compare/2.1.0...3.0.0-alpha.0) (2018-02-26)


### Features

* **module:** API client exported as module ([7eaf673](https://github.com/flowup/api-client-generator/commit/7eaf673)), closes [#23](https://github.com/flowup/api-client-generator/issues/23)


### BREAKING CHANGES

* **module:**
  - renamed to APIClient
  - domain and configuration are now provided using `.forRoot` method
  ```
  APIClientModule.forRoot({
    domain: 'https://api.url',
  }),
  ```
  - cli command renamed to `api-client-generator`



<a name="2.1.0"></a>
# [2.1.0](https://github.com/flowup/api-client-generator/compare/2.0.1...2.1.0) (2018-02-25)


### Bug Fixes

* **models:** enum property names same as values ([7a0b171](https://github.com/flowup/api-client-generator/commit/7a0b171)), closes [#18](https://github.com/flowup/api-client-generator/issues/18)


### Features

* **api-client:** models imported as module ([3492d8f](https://github.com/flowup/api-client-generator/commit/3492d8f)), closes [#22](https://github.com/flowup/api-client-generator/issues/22)
* **domain:** relative path instead of localhost ([e19fffe](https://github.com/flowup/api-client-generator/commit/e19fffe))
