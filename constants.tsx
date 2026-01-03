
import { Project, Experience, TechItem } from './types';

export const TECH_STACK: TechItem[] = [
  { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'uniapp', icon: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Cesium', icon: 'https://raw.githubusercontent.com/CesiumGS/cesium/main/Apps/Sandcastle/images/cesium-logomark.svg' },
  { name: 'ECharts', icon: 'https://echarts.apache.org/zh/images/logo.png' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '艺驰新媒体运营平台 (SaaS)',
    description: '集短视频、有声书运营与实物商城于一体的 SaaS 平台。主导小程序交互优化，提升用户停留时长 35%+，封装通用业务组件库提升开发效率 40%。',
    tags: ['uniapp', 'Vue3', 'SaaS', '性能优化'],
    thumbnail: 'https://picsum.photos/seed/media/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '2',
    title: '北斗数字地球学习平台',
    description: '集成 AI 问答、地理图层、数字教材的教育平台。采用 uniapp + Cesium 实现跨平台地球数据可视化，支持实时流式响应的 AI 对话模块。',
    tags: ['Cesium', 'AI/SSE', '可视化', '跨端开发'],
    thumbnail: 'https://picsum.photos/seed/earth/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '3',
    title: '艺驰轻舟低代码开发平台',
    description: '基于轻舟 BPM 开发的出版行业 ERP 系统。对 Element-plus 进行深度二次开发，实现流程编排与表单设计的可视化配置。',
    tags: ['Element-plus', 'Low-code', 'ERP', 'BPM'],
    thumbnail: 'https://picsum.photos/seed/lowcode/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '4',
    title: '华夏政区多语种数据平台',
    description: '中国各省市区详细数据与视频展示平台。使用 ECharts 实现地域数据可视化，封装多语言切换方案及瀑布流布局。',
    tags: ['ECharts', 'Vue', '可视化', 'i18n'],
    thumbnail: 'https://picsum.photos/seed/map/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '5',
    title: '康久久易出行平台',
    description: '包含微信小程序与 APP 的福祉租赁平台。实现设备租赁、微信支付验证及蓝牙设备连接控制，完成 uniapp 多端打包发布的完整流程。',
    tags: ['uniapp', '微信小程序', 'IoT', '支付对接'],
    thumbnail: 'https://picsum.photos/seed/care/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '6',
    title: 'Sigmob 流量变现管理平台',
    description: '广告开发者后台，支持数据看板、财务管理与素材生成。从 0 到 1 搭建 Vue+Element 架构，实现 i18n 国际化及 Webpack 构建优化。',
    tags: ['Vue', 'Element UI', '广告系统', '架构设计'],
    thumbnail: 'https://picsum.photos/seed/ads/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '7',
    title: 'Sigmob 中控管理平台',
    description: '公司内部运营管理系统。开发 H5 素材编辑器，支持动态表单配置与实时预览；搭建 Mock 平台与通用请求封装。',
    tags: ['Vue', 'H5 编辑器', '内部工具', 'Mock'],
    thumbnail: 'https://picsum.photos/seed/admin/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '8',
    title: '星联 Adx 广告管理平台',
    description: '广告媒体交易平台。基于 Vue + Element UI 开发，实现组件化架构与 EventBus 通信，通过 ECharts 展示多维广告统计数据。',
    tags: ['Vue', 'AdTech', 'ECharts', 'Node.js'],
    thumbnail: 'https://picsum.photos/seed/adx/800/450',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: '9',
    title: '个人博客 (Nuxt SSR)',
    description: '基于 Nuxt.js 实现的服务端渲染博客系统。优化首屏加载速度，实现文章管理、权限控制及 SEO 友好结构。',
    tags: ['Nuxt.js', 'SSR', 'SEO', 'Node.js'],
    thumbnail: 'https://picsum.photos/seed/blog/800/450',
    githubUrl: '#',
    demoUrl: '#',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: '北京艺驰科技有限公司',
    role: '资深前端开发工程师',
    period: '2021.10 - 至今',
    description: [
      '主导新媒体 SaaS 平台架构设计，封装高复用性业务组件库。',
      '实现基于 uniapp + webView + epub.js 的电子书阅读器及后台音频播放方案。',
      '利用 AI 工具（Cursor/Claude）优化开发流程，显著提升产出效率。'
    ],
  },
  {
    id: 'exp2',
    company: '北京三胜科技有限责任公司',
    role: '前端开发工程师',
    period: '2020.04 - 2021.10',
    description: [
      '独立完成康久久易出行小程序开发，封装支付、地址管理等核心模块。',
      '搭建 uniapp Android 环境，完成多款 App 市场打包上架。'
    ],
  },
  {
    id: 'exp3',
    company: '乐元素科技（北京）',
    role: '前端开发工程师',
    period: '2017.11 - 2020.02',
    description: [
      '负责广告平台（DSP/SSP）前端技术栈升级，从 Webpack 3 优化至 Webpack 4。',
      '开发 H5 素材编辑器，支持动态表单配置与实时预览。'
    ],
  }
];
