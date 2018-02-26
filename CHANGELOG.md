
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
