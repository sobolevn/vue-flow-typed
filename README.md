# vue-flow-typed

[![Build Status](https://travis-ci.org/sobolevn/vue-flow-typed.svg?branch=master)](https://travis-ci.org/sobolevn/vue-flow-typed)

[`flow`](https://github.com/facebook/flow/) typings for `Vue` packages.


## Packages

- [`vuex`](https://vuex.vuejs.org/en/) - full support via [`@vue-flow-typed/vuex`](https://github.com/sobolevn/vue-flow-typed/tree/master/packages/vuex)


## Installation

You need to install every package independently.
See the docs of the package you need to install.

Check out [this project template](https://github.com/wemake-services/wemake-vue-template) if you don't know how to start.


## Known problems

There are some problems we can not fix for now:

1. `flow` does not allow to [extend existing library](https://github.com/facebook/flow/issues/396) definitions. So we can not extend `Vue` instances to have `$store` when `vuex` is installed
2. `flow` does not allow to [annotate `this`](https://github.com/facebook/flow/issues/452). So, we can not specify some types for some `Vue` internals, like `$nextTick` and others

See [issues](https://github.com/sobolevn/vue-flow-typed/issues) 
for other know problems.


## Contributing

Please, read [`CONTRIBUTING.md`](/CONTRIBUTING.md) before starting.


## License

MIT.
