---
title: 路径别名
date: 2024-11-29
updated: 2024-11-29
categories: 项目初始化
tags:
  - vue
  - 项目初始化
  - 路径别名
top: 95
---


什么是路径别名?
在项目中引入文件,使用相对路径引入比如`'../../xx/xx'`在很多情况下,很难清除的时候,准确的路径,所以为了方便引入,可以给所引入的路径添加一个名字

> 安装依赖

```bash
npm i -D "@types/node"
```

## `vite.config.ts`配置

```javascript

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
      @: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
  ],
});

```

> 创建了两个名字 src 和 @ 都指向项目的src目录

## typescript配置

`tsconfig.app.json` `tsconfig.node.json` 两个文件添加相同的配置

在 `compilerOptions` 的属性中,添加:
```json
"paths": {
  "src/*": ["src/*"],
  "@/*": ["src/*"]
}
```


