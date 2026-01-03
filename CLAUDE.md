# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

这是王云山的个人作品集网站，一位拥有 10+ 年经验的资深前端开发工程师。网站展示了项目案例、技术专长、职业时间线和联系方式。使用 React 19、Vite、TypeScript、Framer Motion 和 Tailwind CSS 构建。

## 开发命令

```bash
# 安装依赖（使用 pnpm）
pnpm install

# 运行开发服务器 (http://localhost:3000)
pnpm dev

# 生产环境构建
pnpm build

# 预览生产构建
pnpm preview
```

## 架构说明

### 技术栈
- **React 19.2.3** 配合 TypeScript 5.8.2
- **Vite 6.2.0** 作为构建工具
- **Framer Motion 12.23.26** 用于动画效果
- **Lucide React 0.562.0** 图标库
- **Tailwind CSS 3.x** 通过 CDN 引入（在 index.html 中配置）
- **ES Modules** 通过 index.html 中的 import map 导入

### 项目结构

**根级组件**（无 src/ 目录）:
- `App.tsx` - 主应用组件，包含所有区块（Hero、技术栈、项目、经历、联系方式）
- `index.tsx` - React 入口文件，挂载应用
- `index.html` - HTML 入口，包含 Tailwind CDN、自定义样式和 ESM 依赖的 import map

**数据层**:
- `constants.tsx` - 包含 `TECH_STACK`、`PROJECTS` 和 `EXPERIENCES` 数组
- `types.ts` - `Project`、`Experience` 和 `TechItem` 的 TypeScript 接口定义

**可复用组件**（位于 `/components`）:
- `Header.tsx` - 固定导航栏，带有滚动效果和移动端菜单
- `ProjectCard.tsx` - 单个项目卡片，带悬停动画
- `ExperienceTimeline.tsx` - 职业经历的时间线布局

### 核心特性

**鼠标聚光灯效果**: App.tsx:13-53 实现了一个跟随鼠标的径向渐变聚光灯效果，使用 Framer Motion 的 `useMotionValue`、`useSpring` 和 `useTransform` 来实现高性能的高频更新。仅在 hero 区块悬停时激活。

**动画系统**: 大量使用 Framer Motion 实现：
- 交错入场动画（`initial`、`animate`、`transition`）
- 滚动触发的显示效果（`whileInView`）
- 悬停交互（`whileHover`、`whileTap`）

**响应式设计**: 使用 Tailwind 工具类配合断点（md:、lg:）。移动端优先的设计方法，Header 中包含移动端菜单。

**导入别名**: `@/*` 解析到项目根目录（在 vite.config.ts:18-20 和 tsconfig.json:21-25 中配置）

## 重要说明

**表单无实际提交功能**: App.tsx:225 中的联系表单使用了 `onSubmit={(e) => e.preventDefault()}` - 仅为 UI 展示，无后端集成。

**占位符链接**: constants.tsx 中项目卡片的 `githubUrl: '#'` 和 `demoUrl: '#'` 需要更新为真实 URL。

**外部 CDN 依赖**: Tailwind CSS 通过 index.html:8 的 CDN 加载。React/Framer Motion 使用 esm.sh 的 ESM 导入（index.html:32-42）。

**当前未使用环境变量**: 尽管 vite.config.ts 中引用了 `GEMINI_API_KEY`，但实际代码中并未使用。这可能是 AI Studio 模板的遗留配置。

**样式方案**: 混合使用 Tailwind 工具类（主要）和 index.html `<style>` 块中的自定义 CSS（用于网格渐变背景和网格图案）。

## 配置文件

- `vite.config.ts` - 开发服务器运行在 3000 端口，host 0.0.0.0；配置了 `@/*` 路径别名
- `tsconfig.json` - ES2022 目标，React JSX，bundler 模块解析
- `package.json` - 列出所有依赖和 npm 脚本
