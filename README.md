# vue-flow-typed

[![Build Status](https://travis-ci.org/sobolevn/vue-flow-typed.svg?branch=master)](https://travis-ci.org/sobolevn/vue-flow-typed)

`flow` typing for `Vue` and family.


## Reasoning

Using `flow` is awesome. However, using `flow` with `Vue` is not that good.
Since `Vue` does not provide any type definitions.

It also applies for other related packages, like: `vuex`, `vue-class-component`, and others.

We want to provide good typing.


## Supported libraries

- `vuex` - fully supported
- `vue` - work in progress (currently full support is not reachable)
- `vue-class-component` - planning
- `vuex-class` - planning
- `nuxt-class-component` - planning
- `nuxt-axios` - planning


## Installation

```bash
npm install --save-dev vue-flow-typed
```

Then add this line to your `.flowconfig`:

```ini
[libs]
./node_modules/vue-flow-typed/definitions
```

Done!


## Known problems

There are some problems we can not fix for now:

1. `flow` does not allow to [extend existing library](https://github.com/facebook/flow/issues/452) definitions. So we can not extend `Vue` instances to have `$store` when `vuex` is installed
2. `flow` does not allow to [annotate `this`](https://github.com/facebook/flow/issues/396). So, we can not specify some types for some `Vue` internal, like `$nextTick` and others


## Contributing

Please, read [`CONTRIBUTING.md`](/CONTRIBUTING.md) before starting.


## License

MIT.
