---
title: unplugin-vue-components组件自动按需引入
date: 2024-11-29
updated: 2024-11-29
categories: 项目初始化
tags:
  - vue
  - 项目初始化
  - 依赖
top: 96
---

==Vue按需自动导入组件==
特点：
💚 支持Vue 2和Vue 3，开箱即用。
✨ 支持组件和指令。
⚡️ 基于unplugin技术，支持Vite、Webpack、Vue CLI、Rollup、esbuild等构建工具。
🏝 只导入你使用的组件，实现按需加载。
🪐 使用文件夹名称作为命名空间。
🦾 完全支持TypeScript。
🌈 针对流行UI库提供内置解析器。
😃 与unplugin-icons完美协同工作。

## 依赖安装

```javascript
npm i -D unplugin-vue-components
```

## 使用流程

### `vite.config.ts` 配置

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "src/components.d.ts", // 生成的文件的位置
      dirs: ["src/components"], // 我这个意思是,如果是components文件夹下的组件,实现自动引入
      resolvers: [ElementPlusResolver()],
      extensions: ["vue"],
      // 只导入 dirs 指定的根目录组件，不进行深度导入
      deep: false, 
    }),
  ],
});

```
> 参数详解 Components
> imports 需要自动引入的依赖的库列表
> dirs 自动导入的目录列表 ,需要对那些目录的文件实现自动引入
> dts 生成的类型声明文件路径




