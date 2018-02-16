# CompodocRoutes

## Repro
- clone repo
- yarn install
- yarn run doc

fails under

- ubuntu 16.04 / 4.4.0-112-generic
- node 9.4.0
- npm 5.6.0
- compodoc 1.0.7

Full run :


```
npm run doc                           4323ms  ven. 16 févr. 2018 10:23:37 CET

> compodoc-routes@0.0.0 doc /data/devel/sandbox/compodoc-routes
> compodoc -p src/tsconfig.app.json --output docs --theme readthedocs --disableGraph --toggleMenuItems all

1.0.7

Node.js version : v9.4.0

Operating system : Linux 4.4

[10:24:10] Using tsconfig : /data/devel/sandbox/compodoc-routes/src/tsconfig.app.json
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/favicon.ico
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/index.html
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/main.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/polyfills.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/styles.css
[10:24:10] Excluding      : /data/devel/sandbox/compodoc-routes/src/test.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/tsconfig.app.json
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/tsconfig.spec.json
[10:24:10] Ignoring       : /data/devel/sandbox/compodoc-routes/src/typings.d.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/environments/environment.prod.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/environments/environment.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/assets/.gitkeep
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/app.component.html
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/app.component.css
[10:24:10] Ignoring       : /data/devel/sandbox/compodoc-routes/src/app/app.component.spec.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/app.component.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/app.module.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/test-route/test-route.component.html
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/test-route/test-route.component.css
[10:24:10] Ignoring       : /data/devel/sandbox/compodoc-routes/src/app/test-route/test-route.component.spec.ts
[10:24:10] Including      : /data/devel/sandbox/compodoc-routes/src/app/test-route/test-route.component.ts
[10:24:10] Searching package.json file
[10:24:10] package.json file found
[10:24:10] Processing package.json dependencies
[10:24:10] Searching README.md, CHANGELOG.md, CONTRIBUTING.md, LICENSE.md, TODO.md files
[10:24:10] README.md file found
[10:24:10] Error during /data/devel/sandbox/compodoc-routes/CHANGELOG read
[10:24:10] Continuing without CHANGELOG.md file
[10:24:10] Error during /data/devel/sandbox/compodoc-routes/CONTRIBUTING read
[10:24:10] Continuing without CONTRIBUTING.md file
[10:24:10] Error during /data/devel/sandbox/compodoc-routes/LICENSE read
[10:24:10] Continuing without LICENSE.md file
[10:24:10] Error during /data/devel/sandbox/compodoc-routes/TODO read
[10:24:10] Continuing without TODO.md file
[10:24:10] Get dependencies data
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/main.ts
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/polyfills.ts
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/environments/environment.prod.ts
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/environments/environment.ts
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/app/app.component.ts
[10:24:10] found          : AppComponent
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/app/app.module.ts
[10:24:10] Analysing routes definitions and clean them if necessary
[10:24:10] Routes parsing error, maybe a trailing comma or an external variable, trying to fix that later after sources scanning.
[10:24:10] found          : AppModule
[10:24:10]                : - imports:
[10:24:10]                : 	- BrowserModule
[10:24:10]                : 	- RouterModule.forRoot(args)
[10:24:10]                : - declarations:
[10:24:10]                : 	- AppComponent
[10:24:10]                : 	- TestRouteComponent
[10:24:10]                : - bootstrap:
[10:24:10]                : 	- AppComponent
[10:24:10] parsing        : /data/devel/sandbox/compodoc-routes/src/app/test-route/test-route.component.ts
[10:24:10] found          : TestRouteComponent
Unhandled Rejection at: Promise {
  <rejected> { SyntaxError: Bad identifier as unquoted key at line 1 column 3 of the JSON5 data. Still to read: "[\"path\":\"test\",\"comp"
    at error (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:56:25)
    at identifier (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:112:17)
    at object (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:454:31)
    at value (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:482:20)
    at Object.parse (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:508:18)
    at loopModulesParser (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:881:40)
    at RouterParserUtil.constructRoutesTree (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:901:13)
    at Dependencies.getDependencies (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:4853:45)
    at CliApplication.Application.getDependenciesData (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:6276:40)
    at /data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:6140:23
  message: 'Bad identifier as unquoted key at line 1 column 3 of the JSON5 data. Still to read: "[\\"path\\":\\"test\\",\\"comp"',
  at: 2,
  lineNumber: 1,
  columnNumber: 3 } } reason: { SyntaxError: Bad identifier as unquoted key at line 1 column 3 of the JSON5 data. Still to read: "[\"path\":\"test\",\"comp"
    at error (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:56:25)
    at identifier (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:112:17)
    at object (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:454:31)
    at value (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:482:20)
    at Object.parse (/data/devel/sandbox/compodoc-routes/node_modules/json5/lib/json5.js:508:18)
    at loopModulesParser (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:881:40)
    at RouterParserUtil.constructRoutesTree (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:901:13)
    at Dependencies.getDependencies (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:4853:45)
    at CliApplication.Application.getDependenciesData (/data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:6276:40)
    at /data/devel/sandbox/compodoc-routes/node_modules/@compodoc/compodoc/dist/index-cli.js:6140:23
  message: 'Bad identifier as unquoted key at line 1 column 3 of the JSON5 data. Still to read: "[\\"path\\":\\"test\\",\\"comp"',
  at: 2,
  lineNumber: 1,
  columnNumber: 3 }
[10:24:11] Sorry, but there was a problem during parsing or generation of the documentation. Please fill an issue on github. (https://github.com/compodoc/compodoc/issues/new)
```
