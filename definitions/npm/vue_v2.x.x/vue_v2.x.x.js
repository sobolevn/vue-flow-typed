/**
 * Convert from vue typescirpt definition(https://github.com/vuejs/vue/tree/dev/types)
 * eslint-disable
*/

/***** options  *****/
declare type Vue$Constructor = Class<any>;

declare type Vue$Component = typeof Vue | Vue$FunctionalComponentOptions | Vue$ComponentOptions;

declare type Vue$AsyncComponent = (
  resolve: (component: Vue$Component) => void,
  reject: (reason?: any) => void
) => Promise<Vue$Component> | Vue$Component | void;

declare interface Vue$PropOptions {
  type?: Vue$Constructor | Vue$Constructor[],
  required?: boolean,
  default?: any,
  +validator?: (value: any) => boolean;
}

declare interface Vue$ComputedOptions {
  // convariant
  +get?: () => any,
  +set?: (value: any) => void,
  cache?: boolean
}

declare type Vue$WatchHandler = (val: any, oldVal: any) => void;

declare interface Vue$WatchOptions {
  deep?: boolean;
  immediate?: boolean;
}

declare type Vue$FunctionalComponentOptions = {
  props?: string[] | { [key: string]: Vue$PropOptions | Vue$Constructor | Vue$Constructor[] },
  functional: boolean,
  render: (createElement: Vue$CreateElement, context: Vue$RenderContext) => Vue$VNode,
  name?: string
};

declare type Vue$ComponentOptions = {
  // provide additional annotation(s) to determine whether Vue$ComponentOptions or Vue$FunctionalComponentOptions to select
  functional?: void;
  // Can't work in flow:  data?: (() => Object) | Object,
  data?: {$call?: () => Object},
  props?: string[] | { [key: string]: Vue$PropOptions | Vue$Constructor | Vue$Constructor[] },
  propsData?: Object,
  computed?: { [key: string]: (() => any) | Vue$ComputedOptions },
  methods?: { [key: string]: () => any },
  watch?: { [key: string]: ({ handler: Vue$WatchHandler } & Vue$WatchOptions) | Vue$WatchHandler | string },

  el?: Element | string;
  template?: string;
  render?: (createElement: Vue$CreateElement) => Vue$VNode;
  staticRenderFns?: ((createElement: Vue$CreateElement) => Vue$VNode)[];

  beforeCreate?: Function,
  created?: Function,
  beforeDestroy?: Function,
  destroyed?: Function,
  beforeMount?: Function,
  mounted?: Function,
  beforeUpdate?: Function,
  updated?: Function,
  activated?: Function,
  deactivated?: Function,

  directives?: { [key: string]: Vue$DirectiveOptions | Vue$DirectiveFunction };
  components?: { [key: string]: Vue$Component | Vue$AsyncComponent };
  transitions?: { [key: string]: Object };
  filters?: { [key: string]: Function };

  parent?: Vue;
  mixins?: (Vue$ComponentOptions | typeof Vue)[];
  name?: string;
  extends?: Vue$ComponentOptions | typeof Vue;
  delimiters?: [string, string];
}

/***** vnode  *****/
declare type Vue$ScopedSlot = (props: any) => Vue$VNodeChildrenArrayContents | string;

declare type Vue$VNodeChildren = Vue$VNodeChildrenArrayContents | [Vue$ScopedSlot] | string;

declare interface Vue$VNodeChildrenArrayContents {
  [x: number]: Vue$VNode | string | Vue$VNodeChildren;
}

declare interface Vue$VNode {
  tag?: string;
  data?: Vue$VNodeData;
  children?: Vue$VNode[];
  text?: string;
  elm?: Node;
  ns?: string;
  context?: Vue;
  key?: string | number;
  componentOptions?: Vue$VNodeComponentOptions;
  componentInstance?: Vue;
  parent?: Vue$VNode;
  raw?: boolean;
  isStatic?: boolean;
  isRootInsert: boolean;
  isComment: boolean;
}

declare interface Vue$VNodeComponentOptions {
  Ctor: typeof Vue;
  propsData?: Object;
  listeners?: Object;
  children?: Vue$VNodeChildren;
  tag?: string;
}

declare interface Vue$VNodeDirective {
  +name: string;
  +value: any;
  +oldValue: any;
  +expression: any;
  +arg: string;
  +modifiers: { [key: string]: boolean };
}

declare type Vue$DirectiveFunction = (
  el: HTMLElement,
  binding: Vue$VNodeDirective,
  vnode: Vue$VNode,
  oldVnode: Vue$VNode
) => void;

declare interface Vue$DirectiveOptions {
  // convarian, for example bind() {} ==> Vue$DirectiveOptions is convariant
  +bind?: Vue$DirectiveFunction;
  +inserted?: Vue$DirectiveFunction;
  +update?: Vue$DirectiveFunction;
  +componentUpdated?: Vue$DirectiveFunction;
  +unbind?: Vue$DirectiveFunction;
}

declare interface Vue$VNodeData {
  key?: string | number;
  slot?: string;
  scopedSlots?: { [key: string]: Vue$ScopedSlot };
  ref?: string;
  tag?: string;
  staticClass?: string;
  class?: any;
  staticStyle?: { [key: string]: any };
  style?: Object[] | Object;
  props?: { [key: string]: any };
  attrs?: { [key: string]: any };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: { [key: string]: Function | Function[] };
  nativeOn?: { [key: string]: Function | Function[] };
  transition?: Object;
  show?: boolean;
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Function[];
  };
  directives?: Vue$VNodeDirective[];
  keepAlive?: boolean;
}

declare type Vue$RenderContext = {
  props: any,
  children: Vue$VNode[],
  slots(): any,
  data: Vue$VNodeData,
  parent: Vue,
}

/***** plugin  *****/
declare type Vue$PluginFunction<P> = (
  Vue: typeof Vue,
  options?: P
) => void;

declare interface Vue$PluginObject<P> {
  +install: Vue$PluginFunction<P>;
  [key: string]: any;
}

/***** vue  *****/
declare type Vue$CreateElement = {
  // empty node
  (): Vue$VNode;

  // element or component name
  (tag: string, children: Vue$VNodeChildren): Vue$VNode;
  (tag: string, data?: Vue$VNodeData, children?: Vue$VNodeChildren): Vue$VNode;

  // component constructor or options
  (tag: Vue$Component, children: Vue$VNodeChildren): Vue$VNode;
  (tag: Vue$Component, data?: Vue$VNodeData, children?: Vue$VNodeChildren): Vue$VNode;

  // async component
  (tag: Vue$AsyncComponent, children: Vue$VNodeChildren): Vue$VNode;
  (tag: Vue$AsyncComponent, data?: Vue$VNodeData, children?: Vue$VNodeChildren): Vue$VNode;
}

declare class Vue {
  constructor(options?: Vue$ComponentOptions): void;
  $data: Object;
  +$el: HTMLElement;
  +$options: Vue$ComponentOptions;
  +$parent: Vue | void;
  +$root: Vue;
  +$children: Array<Vue>;
  +$refs: { +[key: string]: Vue | Element | Array<$Subtype<Vue>> | Array<$Subtype<Element>>};
  +$slots: { [key: string]: Array<Vue$VNode> };
  +$scopedSlots: { [key: string]: Vue$ScopedSlot };
  +$isServer: boolean;

  $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
  $forceUpdate(): void;
  $destroy(): void;
  // $delete: typeof Vue.delete;
  $delete (object: Object, key: string): void;
  $set: typeof Vue.set;
  $watch(
    expOrFn: string | Function,
    callback: Vue$WatchHandler,
    options?: Vue$WatchOptions
  ): (() => void);
  $on(event: string, callback: Function): this;
  $once(event: string, callback: Function): this;
  $off(event?: string, callback?: Function): this;
  $emit(event: string, ...args: any[]): this;
  $nextTick(callback: () => void): void;
  $nextTick(...rest: Array<void>): Promise<void>;
  $createElement: Vue$CreateElement;

  static config: {
    silent: boolean;
    optionMergeStrategies: any;
    devtools: boolean;
    // Covariant-by-default Method Types(see https://flowtype.org/blog/2016/10/04/Property-Variance.html#covariant-by-default-method-types)
    errorHandler: (err: Error, vm: Vue) => void;
    keyCodes: { [key: string]: number };
  };

  static extend(
    options: Vue$FunctionalComponentOptions | Vue$ComponentOptions
  ): typeof Vue;
  static nextTick(callback: () => void, context?: Array<any>): void;
  static nextTick(...rest: Array<void>): Promise<void>;
  static set<T>(object: Object, key: string, value: T): T;
  static set<T>(array: Array<T>, key: number, value: T): T;
  static delete(object: Object, key: string): void;

  static directive(
    id: string,
    definition?: Vue$DirectiveOptions | Vue$DirectiveFunction
  ): Vue$DirectiveOptions;
  static filter(id: string, definition?: Function): Function;
  static component(
    id: string,
    definition?: Vue$Component | Vue$AsyncComponent
  ): typeof Vue;

  static use<P>(
    plugin: Vue$PluginObject<P> | Vue$PluginFunction<P>,
    options: ?P
  ): void;
  static use(
    plugin: Vue$PluginObject<any> | Vue$PluginFunction<any>,
    ...options: any[]
  ): void;
  static mixin(mixin: typeof Vue | Vue$ComponentOptions): void;
  static compile(template: string): {
    render(createElement: Vue$CreateElement): Vue$VNode;
    staticRenderFns: (() => Vue$VNode)[];
  };
}

declare module 'vue' {
  declare type CreateElement = Vue$CreateElement;

  declare type Component = Vue$Component;
  declare type AsyncComponent = Vue$AsyncComponent;
  declare type ComponentOptions = Vue$ComponentOptions;
  declare type FunctionalComponentOptions = Vue$FunctionalComponentOptions;
  declare type RenderContext = Vue$RenderContext;
  declare type PropOptions = Vue$PropOptions;
  declare type ComputedOptions = Vue$ComputedOptions;
  declare type WatchHandler = Vue$WatchHandler;
  declare type WatchOptions = Vue$WatchOptions;
  declare type DirectiveFunction = Vue$DirectiveFunction;
  declare type DirectiveOptions = Vue$DirectiveOptions;

  declare type PluginObject<T> = Vue$PluginObject<T>;
  declare type PluginFunction<T> = Vue$PluginFunction<T>;

  declare type VNodeChildren = Vue$VNodeChildren;
  declare type VNodeChildrenArrayContents = Vue$VNodeChildrenArrayContents;
  declare type VNode = Vue$VNode;
  declare type VNodeComponentOptions = Vue$VNodeComponentOptions;
  declare type VNodeData = Vue$VNodeData;
  declare type VNodeDirective = Vue$VNodeDirective;

  declare module.exports: typeof Vue;
}
