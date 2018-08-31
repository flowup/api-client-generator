# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
