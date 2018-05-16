# vue-flow-typed

[![Build Status](https://travis-ci.org/sobolevn/vue-flow-typed.svg?branch=master)](https://travis-ci.org/sobolevn/vue-flow-typed)

[`flow`](https://github.com/facebook/flow/) typings for `Vue` packages.


## Packages

- [`vuex`](https://vuex.vuejs.org/en/) - full support via [`@vue-flow-typed/vuex`](https://github.com/sobolevn/vue-flow-typed/tree/master/packages/vuex)
- [`vue-router`](https://router.vuejs.org/) - full support via [`@vue-flow-typed/vue-router`](https://github.com/sobolevn/vue-flow-typed/tree/master/packages/vue-router)


## Installation

You need to install every package independently.
They are all published under [`@vue-flow-typed` organization](https://www.npmjs.com/org/vue-flow-typed).

Check out [this project template](https://github.com/wemake-services/wemake-vue-template) if you don't know how to start.


## Known problems

There are some problems we can not fix for now:

1. `flow` does not allow to [extend existing library](https://github.com/facebook/flow/issues/396) definitions. So we can not extend `Vue` instances to have `$store` when `vuex` is installed
2. `flow` does not allow to [annotate `this`](https://github.com/facebook/flow/issues/452). So, we can not specify some types for some `Vue` internals, like `$nextTick` and others
3. This typing are not yet good enough to be submitted to [`flow-typed`](https://github.com/flowtype/flow-typed). However, we will do it one day

See [issues](https://github.com/sobolevn/vue-flow-typed/issues) 
for other known problems.


## Contributing

Please, read [`CONTRIBUTING.md`](/CONTRIBUTING.md) before starting.


## License

MIT.
