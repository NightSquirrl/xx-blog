---
title: unplugin-auto-import
date: 2024-11-28
updated: 2024-11-28
categories: 项目初始化
tags:
  - vue
  - 项目初始化
  - 依赖
top: 97
---

使用composition api函数、Vue Router、pinia状态管理等官方API需要在页面中显式引入。而使用unplugin-auto-import插件可以自动导入这些API，从而提高开发效率，同时使代码更加简洁易.
比如vue3使用`const a = ref(0)` 必须引入 `import {ref} form 'vue'`配置依赖之后,可以不需要引入,就可以直接使用

## 依赖安装

```javascript
npm i -D unplugin-auto-import
```

## 使用流程

### `vite.config.ts` 配置

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
});
```
> 参数详解
> imports 需要自动引入的依赖的库列表
> dirs 自动导入的目录列表 ,需要对那些目录的文件实现自动引入
> dts 生成的类型声明文件路径

### typescrit 配置

需要自动生成的依赖文件引入到typescript中,否则TS会提示异常`tsconfig.node.json` `include` 属性添加 ` "src/auto-imports.d.ts"`

### eslint 配置

```javascript
// eslint.config.js

// 只需要将自动生成的文件引入即可

import AutoImport from './src/auto-import'
```



