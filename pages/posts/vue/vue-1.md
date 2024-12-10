---
title: vue3.0 中为什么要使用 Proxy，它相比以前的实现方式有什么改进
date: 2024-12-10
updated: 2024-12-10
categories: vue 面试
tags:
  - vue
  - 面试
top: 90
---

### 简单描述

性能更好，解决无法监听数组变化问题

### 略微详细

- Vue2.x通过给每个对象添加getter setter属性去改变对象,实现对数据的观测,Vue3.x通过Proxy代理目标对象,且一开始只代理最外层对象,嵌套对象lazy by default ,性能会更好
- 支持数组索引修改,对象属性的增加,删除

### 详细版本

在Vue 3.0 中使用 Proxy 主要是为了实现响应式数据的变化检测和触发。相比于 Vue 2.x 中使用的 Object.defineProperty，Proxy 提供了更强大和灵活的功能，以及更好的性能表现。

以下是 Proxy 相比 Object.defineProperty 的一些改进和优势：

1. 更强大和灵活：Proxy 可以代理整个对象，而不仅仅是对象的属性。这意味着您可以监听对象的整个操作，包括属性的增删改查等。而 Object.defineProperty 只能监听对象的属性的读取和赋值操作。

2. 更直观和易用：使用 Proxy 可以更直观地监听对象的操作，而不需要像 Object.defineProperty 那样手动定义 getter 和 setter。这使得代码更加清晰和易于理解。

3. 更好的性能：Proxy 的性能通常比 Object.defineProperty 更好，因为 Proxy 是原生实现的，而 Object.defineProperty 是 JavaScript 引擎的内部实现。Proxy 的底层实现更高效，可以更好地处理大型对象和多次操作。

4. 支持数组变化的检测：使用 Proxy 可以很容易地监听数组的变化，包括数组的 push、pop、splice 等操作。而 Object.defineProperty 难以实现对数组变化的监听。

#### `Object.defineProerty`

Object.defineProperty是ES5的属性

> Object.defineProperty(object, property, descriptor)

参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

##### 参数

object: 要定义属性的对象
property: 要定义或修改的属性的名称或 Symbol
descriptor: 要定义或修改的属性描述符

```javascript
descriptor: {  
  value: 默认为 undefined,  
  // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）
  
  writable: 默认为 false,  
  // 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变
  
  enumerable: 默认为 false,  
  // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中
  
  configurable: 默认为 false,  
  // 当且仅当该属性的 configurable 键值为 true 时，该属性才可以被删除，以及除 value 和 writable 特性外的其他特性才能可以被修改
  
  get: 默认为undefined,  
  // 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。该函数的返回值就是属性的值。
  
  set: 默认为undefined,  
  // 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值）。
}
```

#### `Proxy`

##### 概念
`Proxy` 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。`Proxy` 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

```javascript
let proxy = new Proxy(target, handler);
```
##### 参数 
`target` 参数表示所要代理的目标对象，`handler` 参数也是一个对象，用来定制代理拦截行为。 `Proxy` 对象的所有用法，都是上面这种形式，不同的只是 `handler` 参数的写法。其中，`new Proxy()` 表示生成一个`Proxy`实例。

###### handler解析
关于handler拦截属性，有如下：

- `get(target,propKey,receiver)`：拦截对象属性的读取
- `set(target,propKey,value,receiver)`：拦截对象属性的设置
- `has(target,propKey)`：拦截`propKey in proxy`的操作，返回一个布尔值
- `deleteProperty(target,propKey)`：拦截`delete proxy[propKey]`的操作，返回一个布尔值
- `ownKeys(target)`：拦截`Object.keys(proxy)、for...in`等循环，返回一个数组
- `getOwnPropertyDescriptor(target, propKey)`：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象
- `defineProperty(target, propKey, propDesc)`：拦截`Object.defineProperty(proxy, propKey, propDesc`），返回一个布尔值
- `preventExtensions(target)`：拦截`Object.preventExtensions(proxy)`，返回一个布尔值
- `getPrototypeOf(target)`：拦截`Object.getPrototypeOf(proxy)`，返回一个对象
- `isExtensible(target)`：拦截`Object.isExtensible(proxy)`，返回一个布尔值
- `setPrototypeOf(target, proto)`：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值
- `apply(target, object, args)`：拦截 `Proxy` 实例作为函数调用的操作
- `construct(target, args)`：拦截 `Proxy` 实例作为构造函数调用的操作

##### 🌰

```javascript
let proxy = new Proxy({
   },{
   
  get:function (target,key) {
   
    // target 是要代理的对象，key 是要获取的属性
    // 原对象的属性名称在代理之后是不会发生变化的
    return 35
  }
})

console.log(proxy.name); // 35
console.log(proxy.age);  // 35
console.log(proxy.time); // 35

```

#### Reflect
若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是ES6中操作对象而提供的新 API

基本特点：

只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回false）
让Object操作都变成函数行为.

阅读 Proxy 的 MDN 文档上可能会发现其实 Proxy 中 get 陷阱中还会存在一个额外的参数 receiver 。 通过我们上述对 window.Reflect 的打印可以看到，Reflect 的方法、属性和 Proxy 是一样的，所以 Reflect get 也是有这 第三个 receiver 属性的；这个receiver是触发代理对象的劫持时保证正确的 this 上下文指向，它正是可以修改属性访问中的 this 指向为传入的 receiver 对象。也是为了框架健壮性。使用 Object.defineProperty() 重复声明的属性会报错，因为 JavaScript 是单线程语言，一旦抛出异常，后边的任何逻辑都不会执行，所以为了避免这种情况，我们在底层就要写 大量的 try catch 来避免，不够优雅。 但是使用 Reflect.defineProperty() 是有返回值的，所以通过 返回值 来判断你当前操作是否成功。

### 解决vue2 Object.defineProperty的难题

1. 一次只能对一个属性进行监听，需要遍历来对所有属性监听。这个我们在上面已经讲过了。
2. 在遇到一个对象的属性还是一个对象的情况下，需要递归监听。
3. 对于对象的新增属性，需要手动监听
4. 对于数组通过push、unshift方法增加的元素，也无法监听 但是看过vue3源码的同学可以发现，vue3的响应式并不是只用了proxy来实现的，还用了一个搭档Reflect。也就是Proxy(代理) 配合 Reflect(反射) 进行设计的。那么就有疑问了 为什么要用上Reflect。
