# rollup-boilerplate

This is just another one Rollup + Mocha + ESLint + Buble boilerplate/starter project, inpired by https://github.com/w8r/rollup-buble-mocha-boilerplate

## Features

 - It works! (at least at beginning of 2018 - you know, JS stuff is pretty crazy and unreliable nowadays)
 - ESLint code linting, based on "eslint" profile, with some tweaks I found useful (balance between keeping code clear and tidy vs wasting sh..load of time trying to please linter)
 - Mocha tests, running in node and in browser
 - Automatic JSDom support for Mocha in nodeJS environment
 - Suitable for TDD style of development 
 - Bundling with Rollup, with code map support
 - Buble transpiler
 

## Commands

 - `npm run lint` - ESLint check for src and test js files
 - `npm run start` - Build project and open it in browser, with auto-reload upon code changes
 - `npm run test [test-file]` - run specific test in nodeJS env, ex.: `npm run test test/spec/index.spec.js`
 - `npm run test:all` - run all *.spec.js tests in spec folder in nodeJS environment
 - `npm run test --watch [test-file]`, `npm run test:all --watch` - run one/all Mocha tests, with auto-rerun upon code changes
 - `npm run test:browser` - build project with all tests and run in browser, auto-reload upon code changes

## TODO
 - Add SCSS support
 - Add `ENV` variable support
 - Add production rollup config
 - Add code coverage tool