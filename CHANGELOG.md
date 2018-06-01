# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


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
