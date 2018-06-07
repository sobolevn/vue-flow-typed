// @flow

// This types are just taken from
// https://github.com/vuejs/vue-router/blob/dev/types/router.d.ts

// We can not import `Vue` due to
// https://github.com/facebook/flow/issues/396
// so we just alias it as `any`:
declare module 'vue-router' {
  declare type Vue = any
  declare type Component = any

  declare type Dictionary<T> = { [key: string]: T }
  declare type Position = { x: number, y: number }
  declare type PositionResult =
    Position
    | { selector: string, offset?: Position }
    | void

  declare export interface Location {
    name?: string,
    path?: string,
    hash?: string,
    +query?: Dictionary<string | Array<string>>,
    params?: Dictionary<string>,
    append?: boolean,
    replace?: boolean
  }

  declare export type RouterMode = 'hash' | 'history' | 'abstract'
  declare export type RawLocation = string | Location
  declare export type RedirectOption = RawLocation | ((to: Route) => RawLocation)
  declare export type NextCallback = (
    { to?: RawLocation } | false | ((vm: Vue) => any) | void
  ) => void
  declare export type NavigationGuard = (
    to: Route,
    from: Route,
    next: NextCallback
  ) => any

  declare class Router {
    constructor (options?: RouterOptions): Router,

    app: Vue,
    mode: RouterMode,
    currentRoute: Route,

    beforeEach (guard: NavigationGuard): Function,
    beforeResolve (guard: NavigationGuard): Function,
    afterEach (hook: (to: Route, from: Route) => any): Function,
    push (location: RawLocation, onComplete?: Function, onAbort?: Function): void,
    replace (location: RawLocation, onComplete?: Function, onAbort?: Function): void,
    go (n: number): void,
    back (): void,
    forward (): void,
    getMatchedComponents (to?: RawLocation | Route): Array<Component>,
    onReady (cb: Function, errorCb?: Function): void,
    onError (cb: Function): void,
    addRoutes (routes: Array<RouteConfig>): void,
    resolve (to: RawLocation, current?: Route, append?: boolean): {
      location: Location,
      route: Route,
      href: string,
      // backwards compat
      normalizedTo: Location,
      resolved: Route
    },

    static install (vm: Vue): void
  }

  declare export interface RouterOptions {
    routes?: Array<RouteConfig>,
    mode?: RouterMode,
    fallback?: boolean,
    base?: string,
    linkActiveClass?: string,
    linkExactActiveClass?: string,
    parseQuery?: (query: string) => Object,
    stringifyQuery?: (query: Object) => string,
    scrollBehavior?: (
      to: Route,
      from: Route,
      savedPosition: Position | void
    ) => PositionResult | Promise<PositionResult>
  }

  declare export interface PathToRegexpOptions {
    sensitive?: boolean,
    strict?: boolean,
    end?: boolean
  }

  declare export type RoutePropsFunction = (route: Route) => Object

  declare export interface RouteConfig {
    path: string,
    name?: string,
    component?: Component,
    components?: Dictionary<Component>,
    redirect?: RedirectOption,
    +alias?: string | Array<string>,
    children?: Array<RouteConfig>,
    meta?: any,
    beforeEnter?: NavigationGuard,
    +props?: boolean | Object | RoutePropsFunction,
    caseSensitive?: boolean,
    pathToRegexpOptions?: PathToRegexpOptions
  }

  declare export interface RouteRecord {
    path: string,
    regex: RegExp,
    components: Dictionary<Component>,
    instances: Dictionary<Vue>,
    name?: string,
    parent?: RouteRecord,
    redirect?: RedirectOption,
    matchAs?: string,
    meta: any,
    beforeEnter?: (
      route: Route,
      redirect: (location: RawLocation) => void,
      next: () => void
    ) => any,
    +props:
      boolean
      | Object
      | RoutePropsFunction
      | Dictionary<boolean | Object | RoutePropsFunction>
  }

  declare export interface Route {
    path: string,
    name?: string,
    hash: string,
    +query: Dictionary<string | Array<string>>,
    params: Dictionary<string>,
    fullPath: string,
    matched: Array<RouteRecord>,
    redirectedFrom?: string,
    meta?: any
  }

  declare export default typeof Router
}
