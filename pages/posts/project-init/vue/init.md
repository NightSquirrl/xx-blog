---
title: 项目初始化 vue+vite+typescrit+eslint
date: 2024-11-28
updated: 2024-11-28
categories: 项目初始化
tags:
  - vue
  - 项目初始化
top: 99
---

# Vue项目的手动搭建

## Vue项目的创建
### vite命令创建

> 直接创建vite+vue 项目

```bash
npm init vite

# 选择 vue

# 选择 typescript
```
到此一个简单的Vue3项目已经创建成功,里面只包含vue+typescript其他的都不包含


### 手动搭建

> 初始化包项目

```bash
npm init -y
```

> 添加依赖

```bash
npm i vue

npm i -D vite @vitejs/plugin-vue typescript vue-tsc
```
> 创建文件 `/index.html`

```html
<!-- index.html --> 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOCUMENT</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Theme studio design tool for watchface">
</head>
<body>
<div id="app"></div>
<script type="module" src="/src/main.ts"></script>
</body>
</html>

```
> 创建vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
      port: 3000 // 端口
  }
})

```

> 创建 /src/main.ts

```typescript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

> 创建 `/src/App.vue`文件

```vue
<script setup lang="ts">
const count = ref(0)
</script>

<template>
    <div>App</div>
</template>

<style scoped>

</style>

```

> 创建文件夹 `public` 静态资源目录

> 添加启动命令
> `package.json` 

```json
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
  },
```

## 集成typescript

> 依赖安装

```bash
npm i typescript vue-tsc
```

> 创建文件 tsconfig.json tsconfig.app.json tsconfig.node.json

###  tsconfig.json

```json
// tsconfig.json

{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}

```
### tsconfig.node.json
> tsconfig.node.json
> tsconfig.node.json 是一个专门针对 Node.js 应用程序的 TypeScript 配置文件。它的作用与标准的 tsconfig.json 类似，但通常包含了更针对性的编译选项，以优化 TypeScript 代码在 Node.js 环境中的运行性能和兼容性。创建这样一个单独的配置文件可以帮助区分 Web 前端和后端服务器应用程序之间的编译设置。
以下是一些可能会出现在 tsconfig.node.json 中，专为 Node.js 应用程序设置的编译选项示例：

- target: 设置为 "es6" 或更高版本，因为 Node.js 支持 ECMAScript 6 及以上的特性。
- module: 设置为 "commonjs"，因为 Node.js 使用 CommonJS 模块系统。
- lib: 包含 "dom" 以外的库，如 "esnext"、"es2017" 或 "es2020"，以支持 Node.js特有的全局变量和 API。
- types: 添加 "@types/node" 来引入 Node.js 的类型定义，以便在 TypeScript 中使用 Node.js API。
- allowSyntheticDefaultImports: 如果需要从 CommonJS 模块导入默认导出，可以开启此选项。
- resolveJsonModule: 启用 JSON 模块导入，使得可以直接导入 .json 文件。

```json
{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": [ // 需要检查的文件
    "*.d.ts",
    "src/**/*.vue",
    "src/**/*.ts",
  ],
  "compilerOptions": {
    "target": "ESNext",
    "baseUrl": "./",
    "noImplicitAny": false, // 如果为true,假设一个函数的参数没有指定.类型默认为any,会提示报错,必须指定类型, false 代表可以不指定默认为any
    "paths": {
      "@": ["src/*"] // 设置路径别名
    },
    "composite": true, // 启用项目编译
    "types": ["node", "vite/client"],
    "typeRoots": ["node_modules/@types"], // 包含类型定义的文件夹列表
    "ignoreDeprecations": "5.0",
    "lib": ["ESNext", "DOM", "DOM.Iterable"]
  },
  "exclude": ["node_modules"] // 不需要检查的文件
}

```

> 关于types的解释
>在 package.json 文件中的 "types": ["node", "vite/client"] 配置项主要用于告诉 TypeScript 编译器关于项目中使用的 TypeScript 类型声明文件（type declarations）的位置。这些声明文件帮助 TypeScript 理解项目中的库和依赖项的类型信息，从而提供更好的代码补全、静态检查和开发体验。
"node"：这表示 TypeScript 会使用 @types/node 包中的类型声明，这通常包括了 Node.js 的核心模块，如 fs, http, path 等的类型定义。
"vite/client"：这表示 TypeScript 会使用 @types/vite/client 包中的类型声明。Vite 是一个现代的前端构建工具，它提供了快速的开发服务器和构建功能。@types/vite/client 包含了 Vite 客户端的类型定义，帮助开发者在使用 Vite 的 API 时获得类型支持。

### tsconfig.app.json

```json

{
  "include": ["src/**/*.vue", "*.d.ts", "src/**/*.ts"],
  "compilerOptions": {
    "target": "ESNext",
    "baseUrl": "./",
    "noImplicitAny": false,
    "paths": {
      "src/*": ["src/*"]
    },
    "types": ["vite/client"],
    "lib": ["ESNext", "DOM", "DOM.Iterable"], // 添加DOM相关的类型
    "experimentalDecorators": true,
    "ignoreDeprecations": "5.0"
  },
}

```
### 配置列表

```json
{
  "compilerOptions": {
    /* 访问 https://aka.ms/tsconfig.json 以阅读有关此文件的更多信息 */

    
    /* 基本选项 */
    "incremental": true,                   /* 启用增量编译 */
    "target": "ESNEXT",                    /* 指定 ECMAScript 目标版本：'ES3'、'ES5'（默认）、'ES2015'、'ES2016'、'ES2017'、'ES2018'、'ES2019'、'ES2020' 或 'ESNEXT'。 */
    "module": "commonjs",                  /* 指定模块代码生成：“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”、“es2020”或“ESNext”。 */
    "lib": [],                             /* 指定要包含在编译中的库文件。 */
    "allowJs": true,                       /* 允许编译 javascript 文件。 */
    "checkJs": true,                       /* 报告 .js 文件中的错误。 */
    "jsx": "preserve",                     /* 指定 JSX 代码生成：'preserve'、'react-native' 或 'react'。 */
    "declaration": true,                   /* 生成相应的“.d.ts”文件。 */
    "declarationMap": true,                /* 为每个对应的“.d.ts”文件生成一个源映射。 */
    "sourceMap": true,                     /* 生成相应的“.map”文件。 */
    "outFile": "./",                       /* 连接输出到单个文件。 */
    "outDir": "./",                        /* 将输出结构重定向到目录。 */
    "rootDir": "./",                       /* 指定输入文件的根目录。用于通过 --outDir 控制输出目录结构。 */
    "composite": true,                     /* 启用项目编译 */
    "tsBuildInfoFile": "./",               /* 指定文件存放增量编译信息 */
    "removeComments": true,                /* 不要向输出发出注释（删除除代码注释）。 */
    "noEmit": true,                        /* 不发出输出（不生成编译后的文件）。 */
    "noEmitOnError": true,                 /* 在输出js代码时，如果有错将不编译文件。 */
    "importHelpers": true,                 /* 从 'tslib' 导入发射助手。 */
    "downlevelIteration": true,            /* 以“ES5”或“ES3”为目标时，为“for-of”、展开和解构中的迭代提供全面支持。 */
    "isolatedModules": true,               /* 将每个文件转换为一个单独的模块（类似于 'ts.transpileModule'）。 */


    /* 严格的类型检查选项 */
    "strict": true,                        /* 启用所有严格的类型检查选项。 在开发中，建议将stricet这类选项都开启。 */
    "strictNullChecks": true,              /* 启用严格的空（undefined、null）检查，可以防止“未定义不是对象”。 建议开启*/
    "strictFunctionTypes": true,           /* 启用函数类型的严格检查。 */
    "strictBindCallApply": true,           /* 在函数上启用严格的“绑定”、“调用”、应用”方法。 */
    "strictPropertyInitialization": true,  /* 启用对类中属性初始化的严格检查。 */
    "noImplicitThis": true,                /* 使用隐含的“any”类型在“this”表达式上引发错误。 */
    "noImplicitAny": true,                 /* 使用隐含的“any”类型在表达式和声明上引发错误（主要用于控制变量、参数是否必须知道它们的类型【类型检查】），如果是将JavaScript迁移到TypeScript时，可以关闭此项，但不建议这样做。 */
    "alwaysStrict": true,                  /* 以严格模式解析并为每个源文件发出“使用严格”。 */


    /* 额外检查 */
    "noUnusedLocals": true,                /* 报告未使用的本地人的错误。 */
    "noUnusedParameters": true,            /* 报告未使用参数的错误。 */
    "noImplicitReturns": true,             /* 不是函数中的所有代码路径都返回值时报告错误。 */
    "noFallthroughCasesInSwitch": true,    /* 在 switch 语句中报告失败情况的错误。 */


    /* 模块分辨率选项 */
    "moduleResolution": "node",            /* 指定模块解析策略：'node' (Node.js) 或 'classic' (TypeScript pre-1.6)。 */
    "baseUrl": "./",                       /* 解析非绝对模块名称的基目录。 */
    "paths": {},                           /* 一系列将导入重新映射到相对于“baseUrl”的查找位置的条目。 */
    "rootDirs": [],                        /* 根文件夹列表，其组合内容代表运行时项目的结构。 */
    "typeRoots": [],                       /* 包含类型定义的文件夹列表。 */
    "types": [],                           /* 类型声明文件要包含在编译中。 */
    "allowSyntheticDefaultImports": true,  /* 允许从没有默认导出的模块中默认导入。 这不会影响代码发出，只是类型检查。 */
    "esModuleInterop": true,               /* 通过为所有导入创建命名空间对象，在 CommonJS 和 ES 模块之间启用发射互操作性。 暗示“allowSyntheticDefaultImports”。 */
    "preserveSymlinks": true,              /* 不解析符号链接的真实路径。 */
    "allowUmdGlobalAccess": true,          /* 允许从模块访问 UMD 全局变量。 */


    /* 源映射选项 */
    "sourceRoot": "",                      /* 指定调试器应该定位 TypeScript 文件而不是源位置的位置。 */
    "mapRoot": "",                         /* 指定调试器应该定位映射文件而不是生成位置的位置。 */
    "inlineSourceMap": true,               /* 发出带有源映射的单个文件而不是单独的文件。 */
    "inlineSources": true,                 /* 在单个文件中与源映射一起发出源； 需要设置“--inlineSourceMap”或“--sourceMap”。 */


    /* 实验选项 */
    "experimentalDecorators": true,        /* 启用对 ES7 装饰器的实验性支持。 */
    "emitDecoratorMetadata": true,         /* 为装饰器的发射类型元数据启用实验性支持。 */


    /* 高级选项 */
    "skipLibCheck": true,                     /* 跳过声明文件的类型检查。 */
    "forceConsistentCasingInFileNames": true  /* 禁止对同一文件的大小写不一致的引用。 */
  }
}

```

## eslint集成

`v9` 与其他版本是不同的,配置文件,以及配置的格式都出现了区别
- `.eslintrc.js` `.eslintrc.mjs` 都被弃用了
- 使用 `eslint.config.js` 文件

### v9

```bash
npm init @eslint/config

# 选择适合自己的配置
```

自动安装如下依赖
- "@eslint/js" 
- "eslint"
- "eslint-plugin-vue"
- "globals"
- "typescript-eslint"

#### 运行命令配置

```json
    "lint": "eslint",
    "lint:fix": "eslint --fix",
```

#### 配置文件

自动生成的配置文件 `eslint.config.js`

在JS文件中添加`console.log('test', a)`

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { 
      languageOptions: 
      { 
          globals: globals.browser // 配置全局的变量
       } 
    },
  pluginJs.configs.recommended, // JS相关推荐的配置
  ...tseslint.configs.recommended, // typescript 相关推荐的配置
  ...pluginVue.configs["flat/essential"], // vue相关的配置
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];

```

##### JS 规则配置
> @eslint/js

因为JS的规则很对,如果都需要自己手写太费劲了,可以使用线程的规则集 `@eslint/js`

如果只添加了`pluginJs.configs.recommended` 会发现`console is not defined`这是因为`pluginJs.configs.recommended` 中启用了一条规则`"no-undef": "error"`，`console`是全局变量，默认就可以直接使用，对于eslint来说，任何变量都需要定义，不管是否全局变量。这也可避免我们在项目中使用一些真的不存在的变量时导致出现一些低级错误。

打个比方，你可以在任何浏览器环境执行alert()，但是你在nodejs环境中执行就会报错，nodejs中并没有该方法。

##### TS 规则配置
> typescript-eslint

```json
import tseslint from "typescript-eslint";
export default [
  ...tseslint.configs.recommended, // typescript 相关推荐的配置
];
```
> 自定义

```json
import tseslint from "typescript-eslint";
export default [
   /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
    
    },
  },
];
```


##### 全局变量规则配置
> globals

所以eslint一视同仁，对于任何可用的隐藏全局变量，都需要跟eslint打声招呼。于是，我们可以用一个依赖包来配置所有全局变量，那就是`globals`。

这里只是告知eslint这些是全局变量，eslint便会去掉这些报错。而不是真的给你提供该变量，即便你欺骗eslint xxx 是全局变量，然后你去使用这个xxx时，代码逻辑依旧会报错的。
这里还适合一些通过cdn引入的全局变量，可以在这里配置，使用时eslint就不会报错了。

> 需要注意类型与变量的区别,声明了类型,不代表变量也声明出来

##### Vue配置
> eslint-plugin-vue typescript-eslint

```json

import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },
```

这一步，我们使用了eslintPluginVue.configs['flat/recommended']作为vue的推荐规则配置。同时，里面还包含了vue的ESlint插件，用于解析vue文件，这也是ESlint配置为什么要大改的问题，因为它让ESlint配置更加简单了。
同时，如果是typescript项目，需要在languageOptions.parserOptions中配置解析器来支持typescript。


##### 自定义规则

```json
  {
    rules: {
      "no-console": "error",// error warn off
    },
  }

```

##### 覆盖的问题

注意规则的优先级问题，后面的规则会覆盖前面的规则，所以一般会把recommended写在最前面，然后后面再去关掉/启用一些其他规则。


#### 插件安装

`VSCODE` 为了优化Eslint的使用体验最好安装`eslint`相应的插件,这样可以实时看到代码的异常检查,否则还要手动执行命令检查.

##### ESlint扩展如何运作

`ESlint`扩展会优先去查找项目根目录中的`eslint.config.js` 配置文件，并且包括配置文件所提到的`ESlint`插件，也就是`npm`依赖包，是的没错，`ESlint`扩展本身所需的`ESlint` 版本和`ESlint`插件，都是来自于`node_modules`，你可以试着把这个目录删了，vscode中的`ESlint`扩展就会报错，无法运行。
但你启用`vscode`中的`ESlint`扩展之后，并不会对所有文件生效，你还需要配置`ESlint`扩展的设置来对所需的文件启用校验。
这里建议为每个项目单独添加`vscode`独有的设置，也就是项目根目录中创建一个`.vscode`目录，里面放置一个`settings.json`文件，这样`vscode`就会优先读取该设置：

```json

// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "vue",
    "vue-html",
    "typescript",
    "typescriptreact",
    "html",
    "css",
    "scss",
    "less",
    "json",
    "jsonc",
    "json5",
    "markdown"
  ],
}

```
## Prettier安装和配置

Prettier是什么？其实很多人都认识它，它就是一个vscode扩展，用于格式化代码。但是用过ESlint的人对它又爱又恨，没错它会跟ESlint冲突。那么我来讲讲它们是如何冲突，又要如何解决。

### Prettier如何运作

`prettier`扩展会读取项目根目录中的`.prettierrc`、`.prettierrc.js`之类的配置文件，然后你在`vscode`中用`prettier`执行格式化时，会根据配置文件的要求对代码进行格式化。
那么问题来着，格式化后的结果，有时跟`ESlint`的要求是不一样的，比如`ESlint`要求这个属性要换行，`prettier`要求这个属性不换行。好了，你代码是格式化的漂漂亮亮了，但是`ESlint`不乐意啊，它就给你报红。怎么办呢？


### 解决Prettier跟ESlint冲突

安装插件 `eslint-plugin-prettier`

`eslint-plugin-prettier`这个插件不仅提供文件解析，代码`fix`，也顺带提供了一些规则配置，比如它会把跟`prettier`冲突的`ESlint`规则给off掉，并使用自己的规则，也就是说，二选一，让你选`prettier`。为什么是`prettier`呢，`prettier`其实只是提供代码风格的规范，也是目前主流的一个风格规范，那我们就跟着主流呗。其他代码逻辑的规范，就交给`ESlint`

```bash
npm i eslint-plugin-prett`ier -D
```

```json
import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'always',
  }),

  /**
   * javascript 规则
   */
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'warn',
    },
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
    },
  },

  /**
 * prettier 配置
 * 会合并根目录下的prettier.config.js 文件
 * @see https://prettier.io/docs/en/options
 */
  eslintPluginPrettierRecommended,
)

```

### prettier.config.js配置文件

```javascript
// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  printWidth: 80,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
  experimentalTernaries: false,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
}
```


## 总结

所有需要安装的依赖

```bash
npm i eslint @eslint/js globals typescript-eslint eslint-plugin-vue @stylistic/eslint-plugin eslint-plugin-prettier -D
```

### `eslint.config.js`

```javascript
// eslint.config.js
import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'always',
  }),

  /**
   * javascript 规则
   */
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'warn',
    },
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
    },
  },

  /**
 * prettier 配置
 * 会合并根目录下的.prettier.config.js 文件
 * @see https://prettier.io/docs/en/options
 */
  eslintPluginPrettierRecommended,
)
```

### prettier.config.js


```javascript
// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  printWidth: 80,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
  experimentalTernaries: false,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
}
```
